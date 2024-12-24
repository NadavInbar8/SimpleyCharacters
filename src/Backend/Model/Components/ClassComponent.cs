using RoguelikeToolkit.DiceExpression;
using RoguelikeToolkit.Entities;

namespace Backend.Model.Components;

[Component(Name = "Class")]
public class ClassComponent
{
    public string Name { get; set; } //"Fighter"
    public Dice HitDie { get; set; } //"d10"
    public List<string> Proficiencies { get; set; }
    public bool HasSpellcasting { get; set; }
    public Dictionary<int, List<string>> LevelUpFeatures { get; set; }
}