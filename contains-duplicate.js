function containsDuplicate(arr) {
  const set = new Set();
  for (let el of arr) {
    if (set.has(el)) {
      return true;
    }
    set.add(el);
  }
  return false;
}

const arr = [1, 2, 3, 4, 4, 5];
console.log(containsDuplicate(arr));
