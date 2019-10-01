import { getRandomInt } from "./Utils";

describe("getRandomInt()", () => {
  it("returns a random number less than max of 10", () => {
    const integer = getRandomInt(10);
    expect(integer).toBeLessThanOrEqual(9);
  });

  it("returns a random number less than max of 3", () => {
    const integer = getRandomInt(3);
    expect(integer).toBeLessThanOrEqual(3);
  });
});
