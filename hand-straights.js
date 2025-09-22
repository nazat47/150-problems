// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 

// Example 1:

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

class SortedMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    this.map.set(key, value);

    this.map = new Map([...this.map.entries()].sort(([k1], [k2]) => k1 - k2));
  }

  get(key) {
    return this.map.get(key);
  }

  entries() {
    return this.map.entries();
  }
}

function isNStraightHand(cards, groupSize) {
  if (cards.length % groupSize !== 0) return false;
  let cardCounts = new SortedMap();

  for (let i = 0; i < cards.length; i++) {
    if (!cardCounts.get(cards[i])) {
      cardCounts.set(cards[i], 0);
    }
    cardCounts.set(cards[i], cardCounts.get(cards[i]) + 1);
  }

  while (cardCounts.map.size !== 0) {
    let firstCard = cardCounts.map.keys().next().value;
    for (let i = 0; i < groupSize; i++) {
      let currCard = firstCard + i;
      if (!cardCounts.get(currCard)) {
        return false;
      }

      let count = cardCounts.get(currCard);
      if (count === 1) {
        cardCounts.map.delete(currCard);
      } else {
        cardCounts.set(currCard, count - 1);
      }
    }
  }
  return true;
}

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
