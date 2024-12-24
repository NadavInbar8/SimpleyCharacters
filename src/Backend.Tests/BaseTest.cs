using AutoFixture;
using AutoFixture.AutoNSubstitute;
using Backend.Services;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NSubstitute;
// ReSharper disable VirtualMemberCallInConstructor

namespace Backend.Tests;

public abstract class BaseTest
{
    protected virtual Settings Settings { get; } = new()
    {
        DataFolders = [ "Data" ]
    };

    protected readonly IFixture Fixture;

    protected BaseTest()
    {
        Fixture = new Fixture().Customize(new AutoNSubstituteCustomization());

        InitializeMocks();
    }

    protected virtual void InitializeMocks()
    {
        var logger = Substitute.For<ILogger<TemplateRepository>>();

        var settings = Substitute.For<IOptionsMonitor<Settings>>();
        settings.CurrentValue.Returns(Settings);

        Fixture.Inject(logger);
        Fixture.Inject(settings);
    }
}