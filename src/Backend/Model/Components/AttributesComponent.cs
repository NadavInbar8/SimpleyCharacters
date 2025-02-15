using RoguelikeToolkit.Entities;

namespace Backend.Model.Components;

[Component(Name = "Attributes")]
public class AttributesComponent
{
    public int Strength { get; set; }
    public int Dexterity { get; set; }
    public int Constitution { get; set; }
    public int Intelligence { get; set; }
    public int Wisdom { get; set; }
    public int Charisma { get; set; }
}