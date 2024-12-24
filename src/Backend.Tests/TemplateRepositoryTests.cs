using AutoFixture;
using Backend.Services;

namespace Backend.Tests;

public class TemplateRepositoryTests: BaseTest
{
    [Fact(DisplayName = "Can create new character template")]
    public void Can_create_new_character()
    {
        var repo = Fixture.Create<TemplateRepository>();

        Assert.True(repo.TryGenerateNewCharacterTemplate("elf", "wizard", out var elfWizardCharacterTemplate));
        Assert.NotNull(elfWizardCharacterTemplate);

        Assert.Contains(elfWizardCharacterTemplate.Inherits,
            item => item.Equals("elf") || item.Equals("wizard"));
        Assert.Equal(2, elfWizardCharacterTemplate.Inherits.Count);
    }
}