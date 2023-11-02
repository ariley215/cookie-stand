'use strict';
// global function for all object literals to use
// my randomInRange function
// estimate sales with random in range function
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustNumber(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}
function estimateSales(store) {
  const salesArray = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = randomCustNumber(store.minCust, store.maxCust);
    const hourSales = Math.ceil(numCustomers * store.aveCookies)
    salesArray.push(hourSales);


  }
  return salesArray;
}

// cookie store constructor

function CookieStore(store, minCust, maxCust, aveCookies){
  this.store = store,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.aveCookies = aveCookies,
  this.salesArray = estimateSales(this);
}
// estimate method as prototype method
CookieStore.prototype.estimateSales = function() {
  this.salesArray = estimateSales(this);
}


// create rows for each city with cookie data
const tableElem = document.getElementById('data-table');


CookieStore.prototype.render = function() {

  const LocationRow = document.createElement('tr')
  tableElem.appendChild(LocationRow);
  const storeCell = document.createElement('th')
  LocationRow.appendChild(storeCell);

  let cookiesSold = 0;

  for (let i = 0; i < this.salesArray.length; i++) {
    let cookiePerHour = this.salesArray[i];
    cookiesSold += cookiePerHour
    let salesItem = LocationRow.insertCell(i + 1);
    salesItem.textContent = `${this.salesArray[i]} cookies`;
  }

//total line


const container = document.getElementById('root');


const totalCookies = document.createElement('td');
LocationRow.appendChild(totalCookies);
const totalInfo = `Total: ${cookiesSold} cookies sold`;
totalCookies.textContent = totalInfo;

}

//  Location Header Cell
function header() {
  const tableRow = document.createElement('tr')
  tableElem.appendChild(tableRow);
  const locationHeaderCell = document.createElement('th')
  tableRow.appendChild(locationHeaderCell);
  locationHeaderCell.textContent = 'Locations'

// List of hours header rows
  for (let i = 0; i < hours.length; i++){
    const hoursHeaderCell = document.createElement('th')
    tableRow.appendChild(hoursHeaderCell);
    hoursHeaderCell.textContent = hours[i]
  }
  
  const dailyTotalHeaderCell = document.createElement('th')
  tableRow.appendChild(dailyTotalHeaderCell);
  dailyTotalHeaderCell.textContent = 'Daily Location Total'
}
header();

const seattleLocation = new CookieStore('Seattle', 23, 65, 6.3);
seattleLocation.estimateSales();

const dubaiLocation = new CookieStore('Dubai', 11,38, 2.3)
dubaiLocation.estimateSales ();

const tokyoLocation = new CookieStore('Tokyo', 3, 24, 1.2);
tokyoLocation.estimateSales();

const parisLocation = new CookieStore('Lima', 2, 16, 4.6);
parisLocation.estimateSales();

const limaLocation = new CookieStore('Lima', 2, 16, 4.6);
limaLocation.estimateSales();


// render each location
seattleLocation.render();
tokyoLocation.render();
dubaiLocation.render();
parisLocation.render();
limaLocation.render();



  // create array of location objects for total bottom row

