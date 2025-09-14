function carFleets(target, pos, speed) {
  let cars = Array.from({ length: pos.length }, () => [0, 0]);
  for (let i = 0; i < pos.length; i++) {
    cars[i][0] = pos[i];
    cars[i][1] = Math.floor((target - pos[i]) / speed[i]);
  }

  cars.sort((a, b) => b[0] - a[0]);
  let prevTime = 0;
  let count = 0;
  for (const car of cars) {
    if (car[1] > prevTime) {
      count++;
      prevTime = car[1];
    }
  }
  return count;
}

console.log(carFleets(12, [0, 3, 5, 8, 10], [1, 3, 1, 4, 2]));
