import { checkDuplicate } from "./checkDuplicate";

describe(checkDuplicate.name, () => {
  it("test 1", () => {
    const result = checkDuplicate("");
    expect(result).toBe(false);
  });
  it("test 2", () => {
    const result = checkDuplicate("abcac");
    expect(result).toBe(true);
  });
});
