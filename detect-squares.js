// You are given a stream of points on the X-Y plane. Design an algorithm that:

// Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as
//  different points.
// Given a query point, counts the number of ways to choose three points from the data structure such that the 
// three points and the query point form an axis-aligned square with positive area.
// An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular 
// to the x-axis and y-axis.

// Implement the DetectSquares class:

// DetectSquares() Initializes the object with an empty data structure.
// void add(int[] point) Adds a new point point = [x, y] to the data structure.
// int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.

// Input
// ["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
// [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
// Output
// [null, null, null, null, 1, 0, null, 2]


class DetectSquares {
  constructor() {
    this.pointsCount = new Map();
  }

  add(points) {
    let x = points[0];
    let y = points[1];
    if (!this.pointsCount.has(x)) {
      this.pointsCount.set(x, new Map());
    }
    this.pointsCount.get(x).set(y, (this.pointsCount.get(x).get(y) || 0) + 1);
  }

  count(points) {
    let x1 = points[0];
    let y1 = points[1];
    if (!this.pointsCount.has(x1)) {
      return 0;
    }

    let totalCounts = 0;
    for (let [y2, countY2] of this.pointsCount.get(x1)) {
      if (y2 === y1) {
        continue;
      }

      let edgeLength = Math.abs(y2 - y1);
      totalCounts += this.countSquares(x1, y1, x1 + edgeLength, y2, countY2);
      totalCounts += this.countSquares(x1, y1, x1 - edgeLength, y2, countY2);
    }
    return totalCounts;
  }

  countSquares(x1, y1, x2, y2, countY2) {
    if (this.pointsCount.has(x2)) {
      let points = this.pointsCount.get(x2);
      return (points.get(y1) || 0) * (points.get(y2) || 0) * countY2;
    }
    return 0;
  }
}

let detector = new DetectSquares();
detector.add([1, 1]);
detector.add([1, 2]);
detector.add([2, 1]);
detector.add([2, 2]);
detector.add([3, 1]);
detector.add([1, 3]);

console.log(detector.count([1, 1])); 