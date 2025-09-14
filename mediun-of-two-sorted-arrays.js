function mediun(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return mediun(arr2, arr1);
  }
  let x = arr1.length;
  let y = arr2.length;

  let s = 0;
  let e = x;
  while (s <= e) {
    let partX = Math.floor((s + e) / 2);
    let partY = Math.floor((x + y + 1) / 2) - partX;

    const xLeft = partX === 0 ? -Infinity : arr1[partX - 1];
    const xRight = partX === x ? Infinity : arr1[partX];
    const yLeft = partY === 0 ? -Infinity : arr2[partY - 1];
    const yRight = partY === y ? Infinity : arr2[partY];

    if (xLeft <= yRight && yLeft <= xRight) {
      if ((x + y) % 2 === 0) {
        return (Math.max(xLeft, yLeft) + Math.min(xRight, yRight)) / 2;
      } else {
        return Math.max(xLeft, yLeft);
      }
    } else if (xLeft > yRight) {
      e = partX - 1;
    } else {
      s = partX + 1;
    }
  }
  return 0;
}

console.log(mediun([1, 2], [3, 4]));
