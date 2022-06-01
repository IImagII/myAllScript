// try {
//    console.log('normal');
//    console.log(a);
//    console.log('результат');
// } catch (error) {
//    console.log(error.name);
//    console.log(error.message);
//    console.log(error.stack);
//    console.log(`мы получили ошибку ${error.name}`);
// }
// console.log('а я буду работатьдальше');

// let json = '{"id":2}';
// try {
//    let user = JSON.parse(json);
//    console.log(user);
//    if (!user.name) {
//       throw new Error('В этих данных нeт  имени');
//    }
// } catch (error) {
//    console.log(error.name);
//    console.log(error.message);
//    console.log(error.stack);
//    console.log(`мы получили ошибку ${error.name}`);
// } finally {
//    console.log('я выполнюсь всегда');
// }
// console.log('а я буду работатьдальше');
// function User(name, age) {
//    this.name = name;
//    let userAge = age;
//    this.getAge = function () {
//       return userAge;
//    };
//    this.setAge = function (age) {
//       if (typeof age === 'number' && age > 0 && age < 110) {
//          userAge = age;
//       } else {
//          console.log('не допустимое значение');
//       }
//    };
//    this.say = function () {
//       console.log(` имя пользователя ${this.name}, возраст: ${userAge}`);
//    };
// }
// let user = new User('Ivan', 25);
// console.log(user.name);
// user.say();
// console.log(user.getAge());
// user.setAge(150);
// console.log(user.getAge());
// let number = 1;
// (function () {
//    let number = 2;
//    console.log(number);
//    return console.log(number + 3);
// })();
// console.log(number);
// let user = (function () {
//    let privet = function () {
//       console.log('i am privet');
//    };
//    let sayHello = function () {
//       console.log('hello');
//    };
//    return {
//       sayHello: sayHello,
//       privet: privet,
//    };
// })();
// console.log(user);
// console.log(user.sayHello());
// console.log(user.privet());
// export let one = 1;
// let two = 2;
// export { two };
// export function sayHello() {
//    console.log('Hello1');
// }
// console.log;
// async function f1() {
//    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    return res.text();
// }
// async function f2() {
//    const tes = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//    return tes.text();
// }

// async function f3() {
//    const res = await fetch('https://jsonplaceholder.typicode.com/todos/3');
//    return res.text();
// }

// async function go() {
//    let a = await f1();
//    console.log(a);
//    let b = await f2();
//    console.log(b);
//    let c = await f3();
//    console.log(c);
// }
// go();
// const usr = {
//    name: 'Pupkin',
//    profession: 'worked',
//    salary: 10000,
// };
// // usr.passport = 'ss121222';
// Object.defineProperty(usr, 'passport', {
//    value: ' dd21212',
//    enumerable: false,
// });
// let entries = Object.entries(usr);
// entries.map(([index, item]) => console.log(index, item));

// function other(c, y) {
//    let d = c.reduce((acc, item) => acc + item / c.length);
//    return d < y;
// }
// console.log(other([2, 3, 4], 5));

// function isFun(string) {
//    for (i = 0; i < string.length; i++) {
//       const char = string[i];
//       if (string.lastIndexOf(char) !== i) {
//          return false;
//       }
//    }
//    return true;
// }

// function isFun(string) {
//    for (let i = 0; i < string.length; i++) {
//       let char = string[i];
//       if (string.lastIndexOf(char) !== i) {
//          return false;
//       }
//    }

//    return true;
// }

// function isFun(string) {
//    string.forEach((item, i) => {
//       let char = item;
//       if (string.lastIndexOf(char) !== i) {
//          return false;
//       }
//    });
//    return true;
// }

// console.log(isFun('ascfVa'));

// function flatten(arr) {
//    const res = [];
//    for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//          let char = flatten(arr[i]);
//          for (let j = 0; j < char.length; j++) {
//             res.push(char[j]);
//          }
//       } else {
//          res.push(arr[i]);
//       }
//    }

//    return res;
// }

// function flatten(arr) {
//    let res = [];
//    arr.forEach((item) => {
//       if (Array.isArray(item)) {
//          let char = flatten(item);
//          char.forEach((elem) => {
//             res = [...res, elem];
//          });
//       } else {
//          res = [...res, item];
//       }
//    });
//    return res;
// }

// console.log(flatten([[1], [[2, 3]], [[[[4]]]]]));

// function removeDup(str) {
//    const res = [];
//    const map = {};
//    for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (!map[char]) {
//          map[char] = true;
//          res.push(char);
//       }
//    }

//    return res.join('');
// }

// console.log(removeDup('acbcbda'));

// function higthFreg(arr) {
//    const map = {};
//    let maxFreg = 0;
//    let maxFregmax = arr[0];
//    arr.forEach((item) => {
//       if (map[item]) {
//          map[item]++;
//       } else {
//          map[item] = 1;
//       }
//       if (map[item] > maxFreg) {
//          maxFreg = map[item];
//          maxFregmax = item;
//       }
//    });
//    return maxFregmax;
// }

// console.log(higthFreg(['edc', 'abc', 'dfc', 'abc', 'fgg']));
// const START = Date.now();

// function someFn() {
//    console.log('time', Date.now() - START);
//    console.log('args', arguments);
// }

// Function.prototype.delay = function (ms) {
//    return (...args) => {
//       setTimeout(() => {
//          this.call(this, ...args);
//       }, ms);
//    };
// };

// const f = someFn.delay(5000, 200, 300);
