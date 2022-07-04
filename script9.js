function isNan(n) {
   let seive = [];
   let prime = [];

   for (let i = 2; i <= n; i++) {
      if (!seive[i]) {
         prime.push(i);
         for (let k = i * i; k <= n; k += i) {
            seive[k] = true;
         }
      }
   }
   return prime;
}

console.log(isNan(50));
