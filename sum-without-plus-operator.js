function sumIntegersWithoutOperator(a, b) {
  while (b !== 0) {
    let temp = a ^ b;
    let carry = (a & b) << 1;
    a = temp;
    b = carry;
  }
  return a;
}

console.log(sumIntegersWithoutOperator(5, 3));
