// import { averagePair } from "./sumZero";
import { averagePair } from "./averagePair";

describe(averagePair.name, () => {
  it("Test 1", () => {
    const result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
    expect(result).toBe(true);
  });
  it("Test 2", () => {
    const result = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
    expect(result).toBe(false);
  });
});
