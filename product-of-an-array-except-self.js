function productOfArrayExceptSelf(arr) {
  let result = new Array(arr.length).fill(1);
  let pre = 1;
  let post = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = pre;
    pre = pre * arr[i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= post;
    post = arr[i] * post;
  }

  return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
