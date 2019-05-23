import React from "react";
import ReactDOM from "react-dom";
import AffirmationComponent, {
  getRandomInt,
  generateAffirmation,
  getAffirmation
} from "./AffirmationComponent";

const MOCK_AFFIRMATIONS = [
  {
    affirmation:
      "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author: "Winnie The Pooh"
  },
  {
    affirmation: "OK. I’m thinking of something orange, and it’s small...",
    author: "Dory"
  }
];

jest.mock("./affirmations", () => {
  const affirmations = [
    {
      affirmation:
        "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
      author: "Winnie The Pooh"
    },
    {
      affirmation: "OK. I’m thinking of something orange, and it’s small...",
      author: "Dory"
    }
  ];

  return affirmations;
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AffirmationComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

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

describe("generateAffirmation()", () => {
  it("should return a affirmation with an author and affirmation", () => {
    const affirmation = generateAffirmation();

    expect(affirmation).toStrictEqual(
      expect.objectContaining({
        author: expect.any(String),
        affirmation: expect.any(String)
      })
    );
  });
});

describe("getAffirmation()", () => {
  it("should return a specific affirmation based on index", () => {
    const affirmation = getAffirmation(1);

    expect(affirmation).toStrictEqual({
      author: MOCK_AFFIRMATIONS[1].author,
      affirmation: MOCK_AFFIRMATIONS[1].affirmation
    });

    const affirmationAlt = getAffirmation(0);
    expect(affirmationAlt).toStrictEqual({
      author: MOCK_AFFIRMATIONS[0].author,
      affirmation: MOCK_AFFIRMATIONS[0].affirmation
    });
  });
});
