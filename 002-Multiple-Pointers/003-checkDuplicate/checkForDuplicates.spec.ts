import { checkForDuplicate } from "./checkForDuplicate";

describe(checkForDuplicate.name, () => {
  it("test 1", () => {
    const result = checkForDuplicate("");
    expect(result).toBe(false);
  });
  it("test 2", () => {
    const result = checkForDuplicate("abcac");
    expect(result).toBe(true);
  });
});
