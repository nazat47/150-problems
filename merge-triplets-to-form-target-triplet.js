function mergeTriplets(triplets, target) {
  let maxValues = [0, 0, 0];
  for (let triplet of triplets) {
    if (
      triplet[0] <= target[0] &&
      triplet[1] <= target[1] &&
      triplet[2] <= target[2]
    ) {
      maxValues[0] = Math.max(maxValues[0], triplet[0]);
      maxValues[1] = Math.max(maxValues[1], triplet[1]);
      maxValues[2] = Math.max(maxValues[2], triplet[2]);
    }
  }

  return (
    maxValues[0] === target[0] &&
    maxValues[1] === target[1] &&
    maxValues[2] === target[2]
  );
}

console.log(
  mergeTriplets(
    [
      [2, 6, 5],
      [7, 4, 6],
      [4, 4, 6],
    ],
    [4, 4, 6]
  )
);
