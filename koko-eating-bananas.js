function minEatingSpeed(piles, h) {
  let left = 1;
  let right = 1;
  for (const pile of piles) {
    right = Math.max(right, pile);
  }

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canFinish(piles, mid, h)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canFinish(piles, speed, h) {
  let hour = 0;
  for (const pile of piles) {
    hour += Math.ceil(pile / speed);
  }
  return hour <= h;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
