class TimeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value, time) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key).push([time, value]);
  }

  binarySearch(arr, timestamp) {
    let res = "";
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid][0] <= timestamp) {
        res = arr[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return res;
  }

  get(key, timestamp) {
    let arr = this.map.get(key);
    let res = this.binarySearch(arr, timestamp);
    return res;
  }
}

const map = new TimeMap();
map.set("a", 1, 1);
map.set("a", 2, 2);
map.set("a", 3, 3);
map.set("b", 1, 1);
map.set("b", 2, 2);

console.log(map.get("a", 12));
console.log(map.get("b", 2));
