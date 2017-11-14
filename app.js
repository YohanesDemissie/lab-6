'use strict';

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  averageCookieSale: 6.3,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    var empty = [];
    for (var i = 0; i <= this.storeHours.length; i++) {
      empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
    }
    return empty;
  },
};
console.log(firstAndPike);

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  averageCookieSale: 1.2,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    var empty = [];
    for (var i = 0; i <= this.storeHours.length; i++) {
      empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
    }
    return empty;
  },
};
console.log(seaTacAirport);

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookieSale: 3.7,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    var empty = [];
    for (var i = 0; i <= this.storeHours.length; i++) {
      empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
    }
    return empty;
  },
};
console.log(seattleCenter);

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  averageCookieSale: 2.3,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    var empty = [];
    for (var i = 0; i <= this.storeHours.length; i++) {
      empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
    }
    return empty;
  },
};
console.log(capitolHill);

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  averageCookieSale: 4.6,
  custPerHr: function () {
    return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  },
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  averageCookiePerHour: function () {
    var empty = [];
    for (var i = 0; i <= this.storeHours.length; i++) {
      empty.push (Math.round(this.averageCookieSale * this.custPerHr()));
    }
    return empty;
  },
};
console.log(alki);
