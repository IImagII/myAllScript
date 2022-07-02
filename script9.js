let myRequest = new XMLHttpRequest();
let a = 0;

myRequest.addEventListener('readystatechange', function () {
   if (this.readyState == 4 && this.status == 200) {
      myFunction(this.responseText);
   }
});

myRequest.open('GET', 'http://getpost.itgid.info/index2.php', true);
myRequest.send();

function myFunction(data) {
   a = data;
   console.log(data);
}
console.log(a);
