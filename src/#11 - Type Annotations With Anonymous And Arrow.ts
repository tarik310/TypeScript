/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const xadd = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(xadd(10, 20));

const addWithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addWithArrow(10, 20));
