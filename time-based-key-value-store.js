// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and 
// retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp.
//  If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values,
//  it returns "".
 

// Example 1:

// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]

// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and
//  timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"


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
