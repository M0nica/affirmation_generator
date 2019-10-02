import numberQueue from "./NumberQueue";

const NUM_VALUES = 10;

describe("Number queue initialization", () => {
  it("sequence array is not empty", () => {
    expect(numberQueue.fill(NUM_VALUES));
    expect(numberQueue.isEmpty()).toBeFalsy();
  });

  it("sequence has the number of elements specified via parameter", () => {
    expect(numberQueue.getLength()).toBe(NUM_VALUES);
  });
});

describe("Number queue item extraction", () => {
  it("an item is successfully extracted from the sequence", () => {
    const extractedItem = numberQueue.extractRandomItem();
    expect(numberQueue.getLength()).toBe(NUM_VALUES - 1);
    expect(numberQueue.hasValue(extractedItem)).toBe(false);
  });
});


