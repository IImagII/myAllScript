// let myRequest = new XMLHttpRequest();
// let a = 0;

// myRequest.addEventListener('readystatechange', function () {
//    if (this.readyState == 4 && this.status == 200) {
//       myFunction(this.responseText);
//    }
// });

// myRequest.open('GET', 'http://getpost.itgid.info/index2.php', true);
// myRequest.send();

// function myFunction(data) {
//    a = data;
//    console.log(data);
// }
// console.log(a);

fetch('http://getpost.itgid.info/index2.php', {
   method: 'GET',
   headers: {
      //  'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
   },
})
   .then((response) => response.text())
   .then((response) => console.log(response));
