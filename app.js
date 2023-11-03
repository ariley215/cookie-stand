'use strict';
// global function for all object literals to use
// my randomInRange function
// estimate sales with random in range function
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattleLocation = new CookieStore('Seattle', 23, 65, 6.3);
const dubaiLocation = new CookieStore('Dubai', 11,38, 2.3)
const tokyoLocation = new CookieStore('Tokyo', 3, 24, 1.2);
const parisLocation = new CookieStore('Paris', 2, 16, 4.6);
const limaLocation = new CookieStore('Lima', 2, 16, 4.6);


const locations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation]

let cookiesSold = 0;

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

let locationsHourlyTotal = 0;
let locationsDailyTotal = 0;

CookieStore.prototype.render = function() {

  const locationRow = document.createElement('tr')
  tableElem.appendChild(locationRow);
  const storeCell = document.createElement('th')
  locationRow.appendChild(storeCell);
  storeCell.textContent = this.store;

  let dailyTotal = 0;
  
for (let i = 0; i < this.salesArray.length; i++) {
  const hourSales = this.salesArray[i];
  cookiesSold += hourSales;
  dailyTotal += hourSales; 
  locationsHourlyTotal += hourSales;
  const salesItems = locationRow.insertCell(i + 1);
  salesItems.textContent = `${hourSales} cookies`;
}

const dailyTotalCell = locationRow.insertCell(this.salesArray.length + 1);
dailyTotalCell.textContent = `${dailyTotal} cookies`;

locationsDailyTotal += dailyTotal;
}

const container = document.getElementById('root')

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

// creates footer row with totals 
// adds daily location totals
// adds total cookies across all stores10
function renderfooterRow(tableElem) {
  const footerRow = document.createElement('tr');
  tableElem.appendChild(footerRow);

  const footerCell = document.createElement('th')
  footerRow.appendChild(footerCell);
  footerCell.textContent = 'Hourly Totals'

  let locationsHourlyTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    
    for (let a = 0; a < locations.length; a++){
      hourlyTotal += locations[a].salesArray[i]
    }
    locationsHourlyTotal += hourlyTotal;

    const totalCell = document.createElement('td');
    footerRow.appendChild(totalCell);
    totalCell.textContent = hourlyTotal;
  }

  
const totalHourlySalesCell = document.createElement('td')
footerRow.appendChild(totalHourlySalesCell);
totalHourlySalesCell.textContent = locationsHourlyTotal + ' cookies';

}




seattleLocation.estimateSales();
dubaiLocation.estimateSales ();
tokyoLocation.estimateSales();
parisLocation.estimateSales();
limaLocation.estimateSales();



// render each location
seattleLocation.render();
tokyoLocation.render();
dubaiLocation.render();
parisLocation.render();
limaLocation.render();


renderfooterRow(tableElem);


