const getMatchingDrinks = require("./server");

describe(getMatchingDrinks, async () => {
  it(" returns an empty array when ingredients are empty", async () => {
    const result1 = await getMatchingDrinks([]);
    expect(result1).toBe([]);
  });

  it(" returns an empty array when no matching cocktails are found", async () => {
    const result2 = await getMatchingDrinks(["test"]);
    expect(result2).toBe([]);
  });

  it(" returns the matching cocktails containing the ingredients", async () => {
    const result3 = await getMatchingDrinks(["sugar", "lime juice"]);
    expect(result3).toEqual([
      {
        id: "11064",
        name: "Banana Daiquiri",
        ingredients: [
          "Light rum",
          "Triple sec",
          "Banana",
          "Lime juice",
          "Sugar",
          "Cherry"
        ]
      }
    ]);
  });
});
