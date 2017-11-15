'use strict';

var firstAndPike = {
  name: '1st And Pike',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookieSale: 6.3,
  dayZero: 0,//where the addition begins with adding total
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    // var empty = [];
    for (var i = 0; i < this.storeHours.length; i++) {
      // jesus jelp with total function
      // rendor: function () //rendor allows you to display javascript data in html
      //if (i <15) {
      //end help
      var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
      this.dayZero += cookieSoldPerHr;
      console.log ('cookies sold per hour', this.dayZero);
      var list = document.getElementsByTagName('ul')[0];
      var newItemLast = document.createElement('li');
      var newTextLast = //the next code below is to display li
      document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
      newItemLast.appendChild(newTextLast);
      list.appendChild(newItemLast);
      // } else { //more of jesus + kowsers help
      //   var newList = document.createElement('li');
      //   var newContent = document.createTextNode('Total: ' + this.dayZero );
      //   newItemLast = document.createElement('li2');
      //   newTextLast = document.createTextNode() //this pulls from 'i' in node
      //
    }
  }
};
//return empty;
firstAndPike.averageCookiePerHour();
console.log(firstAndPike);


// make firstAndPike.averageCookiePerHour() return into an unordered list



//DO NOT NOT NOT NOT DELET NO DELET NO DELET NO DLETE BELOW!!!!


var seaTacAirport = {
  nme: 'SeaTac Airpot',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookieSale: 1.2,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    // var empty = [];
    for (var i = 0; i < this.storeHours.length; i++) {
      // jesus jelp with total function
      // rendor: function () //rendor allows you to display javascript data in html
      //if (i <15) {
      //end help
      var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
      this.dayZero += cookieSoldPerHr;
      console.log ('cookies sold per hour', this.dayZero);
      var list = document.getElementsByTagName('ul')[0];
      var newItemLast = document.createElement('li');
      var newTextLast = //the next code below is to display li
      document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
      newItemLast.appendChild(newTextLast);
      list.appendChild(newItemLast);
      // } else { //more of jesus + kowsers help
      //   var newList = document.createElement('li');
      //   var newContent = document.createTextNode('Total: ' + this.dayZero );
      //   newItemLast = document.createElement('li2');
      //   newTextLast = document.createTextNode() //this pulls from 'i' in node
      //
    }
  }
};
//return empty;
seaTacAirport.averageCookiePerHour();
console.log(seaTacAirport);
//   averageCookiePerHour: function () {
//     var empty = [];
//     for (var i = 0; i <= this.storeHours.length; i++) {
//       empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
//     }
//     return empty;
//   },
// };
// console.log(seaTacAirport);

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookieSale: 3.7,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    // var empty = [];
    for (var i = 0; i < this.storeHours.length; i++) {
      // jesus jelp with total function
      // rendor: function () //rendor allows you to display javascript data in html
      //if (i <15) {
      //end help
      var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
      this.dayZero += cookieSoldPerHr;
      console.log ('cookies sold per hour', this.dayZero);
      var list = document.getElementsByTagName('ul')[0];
      var newItemLast = document.createElement('li');
      var newTextLast = //the next code below is to display li
      document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
      newItemLast.appendChild(newTextLast);
      list.appendChild(newItemLast);
      // } else { //more of jesus + kowsers help
      //   var newList = document.createElement('li');
      //   var newContent = document.createTextNode('Total: ' + this.dayZero );
      //   newItemLast = document.createElement('li2');
      //   newTextLast = document.createTextNode() //this pulls from 'i' in node
      //
    }
  }
};
//return empty;
seattleCenter.averageCookiePerHour();
console.log(seattleCenter);
//   averageCookiePerHour: function () {
//     var empty = [];
//     for (var i = 0; i <= this.storeHours.length; i++) {
//       empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
//     }
//     return empty;
//   },
// };
// console.log(seattleCenter);
//
var capitolHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  averageCookieSale: 2.3,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    // var empty = [];
    for (var i = 0; i < this.storeHours.length; i++) {
      // jesus jelp with total function
      // rendor: function () //rendor allows you to display javascript data in html
      //if (i <15) {
      //end help
      var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
      this.dayZero += cookieSoldPerHr;
      console.log ('cookies sold per hour', this.dayZero);
      var list = document.getElementsByTagName('ul')[0];
      var newItemLast = document.createElement('li');
      var newTextLast = //the next code below is to display li
      document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
      newItemLast.appendChild(newTextLast);
      list.appendChild(newItemLast);
      // } else { //more of jesus + kowsers help
      //   var newList = document.createElement('li');
      //   var newContent = document.createTextNode('Total: ' + this.dayZero );
      //   newItemLast = document.createElement('li2');
      //   newTextLast = document.createTextNode() //this pulls from 'i' in node
      //
    }
  }
};
//return empty;
capitolHill.averageCookiePerHour();
console.log(capitolHill);
//   averageCookiePerHour: function () {
//     var empty = [];
//     for (var i = 0; i <= this.storeHours.length; i++) {
//       empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
//     }
//     return empty;
//   },
// };
// console.log(capitolHill);
//
var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  averageCookieSale: 4.6,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    // var empty = [];
    for (var i = 0; i < this.storeHours.length; i++) {
      // jesus jelp with total function
      // rendor: function () //rendor allows you to display javascript data in html
      //if (i <15) {
      //end help
      var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
      this.dayZero += cookieSoldPerHr;
      console.log ('cookies sold per hour', this.dayZero);
      var list = document.getElementsByTagName('ul')[0];
      var newItemLast = document.createElement('li');
      var newTextLast = //the next code below is to display li
      document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
      newItemLast.appendChild(newTextLast);
      list.appendChild(newItemLast);
      // } else { //more of jesus + kowsers help
      //   var newList = document.createElement('li');
      //   var newContent = document.createTextNode('Total: ' + this.dayZero );
      //   newItemLast = document.createElement('li2');
      //   newTextLast = document.createTextNode() //this pulls from 'i' in node
      //
    }
  }
};
//return empty;
alki.averageCookiePerHour();
console.log(alki);
//   averageCookiePerHour: function () {
//     var empty = [];
//     for (var i = 0; i <= this.storeHours.length; i++) {
//       empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
//     }
//     return empty;
//   },
// };
// console.log(alki);
