using RoguelikeToolkit.Entities;

namespace Backend.Model.Components;

[Component(Name = "Race")]
public class RaceComponent
{
    public string Name { get; set; }
    public int Speed { get; set; }       // in feet
    public int Darkvision { get; set; }  // 60 means 60-foot darkvision
    public Dictionary<string, int> ASIModifiers { get; set; } // { "DEX": 2, "WIS": 1 } etc.
    public List<string> Traits { get; set; } // "Keen Senses", "Fey Ancestry"
}