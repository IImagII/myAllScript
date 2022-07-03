// myAlert('HI', 'red', '.test2');

class Alert {
   constructor(a, c, d) {
      this.message = a;
      this.cssClass = c;
      this.out = d;
   }
   showAlert() {
      document.querySelector(
         this.out
      ).innerHTML = `<p class='${this.cssClass}'>${this.message}</p>`;
   }
}
let m = new Alert('HI', 'orange', '.test');

class Alert2 extends Alert {
   constructor(a, c, d, icon) {
      super(a, c, d);
      this.icon = icon;
   }
   showIconAlert() {
      document.querySelector(this.out).innerHTML = `
	 <p class='${this.cssClass}'>${this.icon}  ${this.message}</p>`;
   }
}

m.showAlert();
console.log(m);
let iconWeb = '<span class="material-symbols-outlined"> star </span>';
let m2 = new Alert2('My message', 'red', '.test2', iconWeb);
m2.showIconAlert();
