using RoguelikeToolkit.Entities;

namespace Backend.Model.Components;

[Component(Name = "Inventory")]
public class InventoryComponent
{
    public List<string> Items { get; set; } = new();
    public int Gold { get; set; }
}