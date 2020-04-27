"use strict";

var fibArr = [];
const fibonacci = () => {
  let el = 0;

  for (let i = 0; ; i++) {
    if (i < 2) {
      fibArr.push(i);
      continue;
    }

    el = fibArr[i - 1] + fibArr[i - 2];
    if (el >= 350) {
      break;
    }
    fibArr.push(el);
  }
  return fibArr;
};

const isFibonnaci = (num) => {
  const check = fibonacci().includes(num);
  return check;
};

console.log(fibonacci());
console.log(isFibonnaci(233));
module.exports = {
  fibonacci,
  isFibonnaci,
};
