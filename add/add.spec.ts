import { add } from "./add";

describe(add.name, () => {
  it("test 1", () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });
});
