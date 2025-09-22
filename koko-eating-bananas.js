// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and 
// will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k 
// bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more
//  bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4


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
