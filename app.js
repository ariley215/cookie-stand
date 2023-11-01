'use strict';
// global function for all object literals to use
// my randomInRange function
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function randomCustNumber(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}
// create separate JS object literals for each shop location
// object literal for Seattle
// worked with chatGPT and  Diana
const seattleLocation = {
  store: 'seattle',
  minCust: 23,
  maxCust: 65,
  aveCookies: 6.3,
  salesArray: [],
  estimate: function () {
    this.salesArray = estimateSales(this);
  }
}

// 
function estimateSales(store) {
  const salesArray = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = randomCustNumber(store.minCust, store.maxCust);
    const hourSales = Math.ceil(numCustomers * store.aveCookies)
    salesArray.push(hourSales);


  }
  return salesArray;
}

seattleLocation.estimate();

// tokyo object
const tokyoLocation = {
  store: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  aveCookies: 1.2,
  salesArray: [],
  estimate: function () {
    this.salesArray = estimateSales(this);
  }
}
tokyoLocation.estimate();

// Dubai object
const dubaiLocation = {
  store: 'Dubai',
  minCust: 11,
  maxCust: 38,
  aveCookies: 13.7,
  salesArray: [],
  estimate: function () {
    this.salesArray = estimateSales(this);
  }
}

dubaiLocation.estimate ();

// paris object
const parisLocation = {
  store: 'Paris',
  minCust: 20,
  maxCust: 38,
  aveCookies: 2.3,
  salesArray: [],
  estimate: function () {
    this.salesArray = estimateSales(this);
  }
}
parisLocation.estimate();

// lima object
const limaLocation = {
  store: 'Lima',
  minCust: 2,
  maxCust: 16,
  aveCookies: 4.6,
  salesArray: [],
  estimate: function () {
    this.salesArray = estimateSales(this);
  }
}
limaLocation.estimate();



const container = document.getElementById('root');
// consider a function that could do this

function render(store) {
  let cookieStandArticle = document.createElement('article');
  container.appendChild(cookieStandArticle);

  let heading = document.createElement('h2');
  cookieStandArticle.appendChild(heading);
  heading.textContent = store.name;

  let hoursList = document.createElement('ul')
  cookieStandArticle.appendChild(hoursList);

  let cookiesSold = 0;

  for (let i = 0; i < store.salesArray.length; i++) {
    let salesItem = document.createElement('li');
    hoursList.appendChild(salesItem);
    let cookiePerHour = store.salesArray[i];
    console.log (store.salesArray[i]);
    cookiesSold += cookiePerHour
    let salesInfo = `${hours[i]}: ${store.salesArray[i]} cookie`;
    salesItem.textContent = salesInfo;
  }

//total line
const totalCookies = document.createElement('li');
hoursList.appendChild(totalCookies);
const totalInfo = `Total: ${cookiesSold} cookies sold`;
totalCookies.textContent = totalInfo;

}

render(seattleLocation);
render(tokyoLocation);
render(dubaiLocation);
render(parisLocation);
render(limaLocation);

function CookieStores(store, minCust, maxCust, aveCookies,){
  this.store = store
  this.minCust = minCust
  this.maxCust = maxCust
  this.aveCookies = []
  this.salesArray = []
  this.estimate = this.
}

CookieStores.prototype.estimateSales = function() {
  return ()
}
