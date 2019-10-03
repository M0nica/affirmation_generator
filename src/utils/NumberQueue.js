import { getRandomInt } from './Utils';

let innerQueue = [];

// Fill innerQueue with a range of numbers from 0 to 'numValues'
function fill (numValues = 0) {
  innerQueue = [];
  for (let i = 0; i < numValues; i++) {
    innerQueue.push(i);
  }
}

// Extract a number from an specific position in the innerQueue
function extractItem (index) {
  const extractedItem = innerQueue[index];
  innerQueue.splice(index, 1);
  return extractedItem;
}

// Extract a number from a random position in the innerQueue
function extractRandomItem () {
  const index = getRandomInt(innerQueue.length);
  return extractItem(index);
}

// Get number of items in the queue
function getLength () {
  return innerQueue.length;
}

// Check if queue is empty
function isEmpty () {
  return innerQueue.length === 0;
}

// Check if value exists in queue
function hasValue (value) {
  return innerQueue.findIndex(item => item === value) !== -1;
}

export default {
  fill,
  extractItem,
  extractRandomItem,
  getLength,
  isEmpty,
  hasValue
};
