const { calculateThreePointAverage } = require("./numberUtils");

describe("returns a player's three point average number over a season", () => {
  it("handles empty array by returning 0", () => {
    expect(calculateThreePointAverage([])).toBe(0);
  });
  it("handles one length array", () => {
    expect(calculateThreePointAverage([35])).toBe(35);
  });
});
