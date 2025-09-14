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
