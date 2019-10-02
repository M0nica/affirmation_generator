import * as QuoteService from './QuoteService';

/* --- MOCK DATA ----------------------------------------------------------- */

const MOCK_QUOTES = [
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

jest.mock("../affirmations", () => [
  {
    affirmation:
      "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author: "Winnie The Pooh"
  },
  {
    affirmation: "OK. I’m thinking of something orange, and it’s small...",
    author: "Dory"
  }
]);

/* --- TEST SUITE ---------------------------------------------------------- */

beforeEach(() => {
  QuoteService.resetIndexQueue();
});

describe("QuoteService.getRandomQuote()", () => {
  it("should return a quote with an author and affirmation", () => {
    const quote = QuoteService.getRandomQuote();

    expect(quote).toStrictEqual(
      expect.objectContaining({
        author: expect.any(String),
        affirmation: expect.any(String)
      })
    );
  });
});

describe("QuoteService.getQuote()", () => {
  it("should return a specific affirmation based on index", () => {
    const quote0 = QuoteService.getQuote(0);
    expect(quote0).toStrictEqual({
      author: MOCK_QUOTES[0].author,
      affirmation: MOCK_QUOTES[0].affirmation
    });

    const quote1 = QuoteService.getQuote(1);
    expect(quote1).toStrictEqual({
      author: MOCK_QUOTES[1].author,
      affirmation: MOCK_QUOTES[1].affirmation
    });
  });
});

