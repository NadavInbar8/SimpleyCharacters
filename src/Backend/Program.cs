using System.Reflection;
using Autofac.Extensions.DependencyInjection;
using Autofac;
using Backend;
using Microsoft.AspNetCore.HostFiltering;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOptions();
builder.Services.AddControllers();
builder.Services.AddHealthChecks();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddOpenApi("simpleycharacters");

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

//configure DI
builder.Host.ConfigureContainer<ContainerBuilder>(diBuilder =>
{
    diBuilder.RegisterAssemblyModules(AppDomain.CurrentDomain.GetAssemblies());

    diBuilder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                    .Where(t => t.Name.EndsWith("Service") ||
                                    t.Name.EndsWith("Repository") ||
                                    t.Name.EndsWith("Factory"))
                    .AsImplementedInterfaces()
                    .AsSelf()
                    .SingleInstance(); //repositories and services are singletons

    diBuilder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                    .Where(t => !t.Name.EndsWith("Service") &&
                                    !t.Name.EndsWith("Repository") &&
                                    !t.Name.EndsWith("Factory"))
                    .AsImplementedInterfaces()
                    .AsSelf();
});

builder.Configuration
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

builder.Services.Configure<Settings>(builder.Configuration.GetSection(nameof(Settings)));
builder.Services.Configure<HostFilteringOptions>(options =>
{
    options.AllowedHosts = builder.Configuration["AllowedHosts"]?
        .Split(';', StringSplitOptions.RemoveEmptyEntries) ?? [];
});

var app = builder.Build();

app.UseHostFiltering();

if (app.Environment.IsDevelopment())
{
    // this would be at /openapi/simpleycharacters.json
    app.MapOpenApi()
       .CacheOutput();

    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseDeveloperExceptionPage(); // detailed error pages in development.
}
else
{
    app.UseHsts();
    app.UseResponseCaching();
}

app.MapSwagger().RequireAuthorization();
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