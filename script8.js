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
export let one = 1;
let two = 2;
export { two };
export function sayHello() {
   console.log('Hello1');
}
