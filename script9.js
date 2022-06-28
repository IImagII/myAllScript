const self = { hello: 'world', hi: 'mahai' };
let a = 3;

document.querySelector('.b-1').addEventListener('click', () => {
   localStorage.setItem('9', JSON.stringify(self));

   let local = JSON.parse(localStorage.getItem('9'));

   for (let elem in local) {
      document.querySelector(
         '.out-1'
      ).innerHTML += `${elem}---${local[elem]}<br>`;
   }
});
