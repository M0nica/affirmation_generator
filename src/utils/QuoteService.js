import quoteList from "../affirmations";
import indexQueue from "./NumberQueue";

export function resetIndexQueue () {
  indexQueue.fill(quoteList.length);
}

export function getRandomQuote() {

  // If sequence is empty, return it to its initial state
  if (indexQueue.isEmpty()) {
    resetIndexQueue();
  }

  const index = indexQueue.extractRandomItem();

  return getQuote(index);
}

export function getQuote(index) {
  const quote = quoteList[index];

  return {
    author: quote.author,
    affirmation: quote.affirmation
  };
}
