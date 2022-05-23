(sum(2, 3) == sum(2)(3)) == 5;
function sum(a, b) {
  let c = a + b;
  return c;
}
console.log(sum(2, 3));

function sum(a, b) {
  if (b) {
    return a + b;
  }
  return function (c) {
    return a + c;
  };
}
console.log(sum(2, 3));
console.log(sum(2)(3));
//==============================================
//!реализуйте bind2 -полный аналог функции bind в js
// Пример:
const sum = (x, y) => x + y;
const plusTen = sum.bind2(undefined, 10);
plusTen(1); //11
plusTen(10); //20
//==============теория что такое bind
const person = {
  firtsName: 'max',
  logName() {
    console.log(`Name: ${this.firtsName}`);
  },
};

const person2 = {
  firtsName: 'person2',
};
person.logName();
person.logName.bind(person2)();
//===============================
//реализация задания
const sum = (x, y) => x + y;
Function.prototype.bind2 = function (contex, ...args) {
  return (...args2) => {
    return this.apply(contex, [...args, ...args2]);
  };
};
const plusTen = sum.bind2(undefined, 10);
console.log(plusTen(1));
console.log(plusTen(10));
