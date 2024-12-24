using System.Collections.ObjectModel;
using DefaultEcs;
using Microsoft.Extensions.Options;
using RoguelikeToolkit.Entities;
using RoguelikeToolkit.Entities.Repository;

namespace Backend.Services;

public class TemplateRepository: IDisposable
{
    private readonly ILogger<TemplateRepository> _logger;
    private EntityTemplateRepository _repository = new();

    public TemplateRepository(IOptionsMonitor<Settings> settings, ILogger<TemplateRepository> logger)
    {
        _logger = logger;
        settings.OnChange(OnSettingsChange);
        OnSettingsChange(settings.CurrentValue);
    }

    private void OnSettingsChange(Settings settings)
    {
        _logger.LogInformation("TemplateRepository: Loading templates from the following folders: {DataFolders}", string.Join(',', settings.DataFolders));
        _repository = new();
        foreach (var folder in settings.DataFolders)
        {
            _repository.LoadTemplateFolder(folder);
        }
    }

    public bool TryGenerateNewCharacterTemplate(string race, string @class, out EntityTemplate? characterTemplate)
    {
        characterTemplate = default;
        if (!_repository.TryGetByName(Constants.BaseCharacterTemplate, out var baseTemplate))
        {
            throw new InvalidOperationException($"TemplateRepository: failed to find {Constants.BaseCharacterTemplate} template - without it nothing will function. Cannot continue");
        }

        if (!_repository.TryGetByName(@class, out _))
        {
            _logger.LogError("TemplateRepository: class template {ClassId} wasn't found, cannot continue", @class);
            return false;
        }

        if (!_repository.TryGetByName(race, out _))
        {
            _logger.LogError("TemplateRepository: race template {RaceId} wasn't found, cannot continue", race);
            return false;
        }

        characterTemplate = baseTemplate with { Inherits = new HashSet<string>([@class, race]) };

        return true;
    }

    public bool TryResolve(string templateName, out EntityTemplate entity) =>
        _repository.TryGetByName(templateName, out entity);

    public void Dispose()
    {
    }
}