// контекст this и егшо сипользование

function showThis(a, b) {
   console.log(this);
   function sum() {
      console.log(this);
      return a + b;
   }
   console.log(sum());
}
showThis();
showThis(4, 5);

let obj = {
   a: 20,
   b: 15,
   sum: function () {
      console.log(this.a);
      function shout() {
         console.log(this);
      }
      shout();
   },
};
obj.sum();

let user = {
   name: 'John',
};
function sayName(surName, lastName) {
   console.log(this);
   console.log(this.name + surName + lastName);
}
console.log(sayName.call(user, ' Smitch', ' Kukuha'));
console.log(sayName.apply(user, [' show', ' kazak']));

function count(number) {
   return this * number;
}
let double = count.bind(2);
console.log(double(3));
console.log(double(10));

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
   this.style.backgroundColor = 'red';
});

//1) просто вызов функции - window/undefined
//2) Метод обьекта - this = обьек
//3) Конструктор (new)  - this = новый созданный обьект
//4)Указание конкретного контекста при помощи методов - call, apply, bind
