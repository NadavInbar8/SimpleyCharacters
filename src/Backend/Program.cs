using Autofac.Extensions.DependencyInjection;
using Autofac;
using Backend;
using Microsoft.AspNetCore.HostFiltering;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddHealthChecks();
builder.Services.AddResponseCaching();

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

//configure DI
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    containerBuilder.RegisterAssemblyModules(AppDomain.CurrentDomain.GetAssemblies());
});

builder.Configuration
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

builder.Services.Configure<Settings>(builder.Configuration.GetSection("Settings"));

builder.Services.Configure<HostFilteringOptions>(options =>
{
    options.AllowedHosts = builder.Configuration["AllowedHosts"]?
        .Split(';', StringSplitOptions.RemoveEmptyEntries) ?? [];
});

var app = builder.Build();

app.UseHostFiltering();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseDeveloperExceptionPage(); // detailed error pages in development.
}
else
{
    app.UseHsts();
    app.UseResponseCaching();
}

app.MapHealthChecks("/health");

app.UseHttpsRedirection();

app.Use(async (context, next) =>
{
    context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
    context.Response.Headers.Append("X-Frame-Options", "DENY");
    context.Response.Headers.Append("Content-Security-Policy", "default-src 'self'");
    await next();
});

app.UseAuthorization();

app.MapControllers();

app.Run();