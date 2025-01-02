using RoguelikeToolkit.Entities;

namespace Backend.Components;

[Component(Name = "Conditions")]
public class ConditionsComponent
{
    // things like ["Bless", "ExhaustionLevel1", "Poisoned"]
    public List<string> ActiveConditions { get; set; } = new();
}
