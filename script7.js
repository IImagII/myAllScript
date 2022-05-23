// arr = [6.1, 4.2, 6.3];
// callBackFunc = Math.floor;
// result = {
//    4: [4.2],
//    6: [6.1, 6.3],
// };

// const group = (arr, callBackFunc) => {
//    const result = {};
//    arr.forEach((element) => {
//       let resultAfterCallbac = callBackFunc(element);
//       result[resultAfterCallbac]
//          ? result[resultAfterCallbac].push(element)
//          : (result[resultAfterCallbac] = [element]);
//    });
//    console.log(result);
// };
// // group([6.1, 4.2, 5.3], Math.floor);

// const myfunc = (arr, callBach) => {
//    let obj = {};
//    arr.forEach((item) => {
//       let arrFucn = callBach(item);
//       obj[arrFucn] ? obj[arrFucn].push(item) : (obj[arrFucn] = [item]);
//    });
//    console.log(obj);
// };
// // myfunc([4.5, 9.7, 2.1], Math.floor);
// const numbers = [2, 3, 7, 3];

// const getArange = (number) => {
//    const total = numbers.reduce((acc, number) => {
//       return acc + number;
//    }, 0);

//    return total / number.length;
// };
// console.log(getArange(numbers));

// let number2 = [1, 4, 4, 3, 3];

// const getAren = (arg) => {
//    let total = arg.reduce((acc, number) => {
//       return acc + number;
//    }, 0);

//    return total;
// };
// console.log(getAren(number2));
// let a = [
//    { id: 55, city: 'arc' },
//    { id: 75, city: 'rca' },
//    { id: 65, city: 'ccc' },
// ];

// let b = a.reduce((acc, item) => {
//    // acc.push(item.city);
//    acc = [...acc, item.id];
//    return acc;
// }, []);

// console.log('================');
// console.log(b);
// let a = [3, -12, 0, 4, 5, -8];
// // let b = [];
// // for (let i = 0; i < a.length; i++) {
// //    if (a[i] >= 0) {
// //       b = [...b, a[i]];
// //    }
// // }
// // console.log(b);
// let c = a.filter((item, index) => {
//    return index % 2 === 0;
// });
// console.log(c);
// let arr = [3, 4, 5];
// arr[5] = 9;
// let b = arr.map((item) => {
//    return item / 2;
// });
// console.log(b);

const filterThis = [2, 1, 3, 4, 5, 6, 9];

// const filter = (arr, fn) => {
//    const filterArr = [];
//    for (let elem of arr) {
//       if (fn(elem)) filterArr.push(elem);
//    }
//    return filterArr;
// };
// console.log(filter(filterThis, (elem) => elem % 2 == 0));
const someOfThis = ['java', 'javascript', 'pyton'];

const some = (arr, fn) => {
   for (let elem of arr) {
      if (fn(elem)) return true;
   }
   return false;
};
console.log(some(someOfThis, (elem) => elem === 'java'));

const mapMe = [1000, 8000, 200, 200];
const map = (arr, fn) => {
   const mapBouble = [];
   for (let elem of arr) {
      mapBouble.push(fn(elem));
   }
   return mapBouble;
};
console.log(map(mapMe, (elem) => elem + 100));
