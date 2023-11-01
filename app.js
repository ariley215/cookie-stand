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

function CookieStore(store, minCust, maxCust, aveCookies,){
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

const container = document.getElementById('root');
// invoking each location []'

render(seattleLocation);
render(tokyoLocation);
render(dubaiLocation);
render(parisLocation);
render(limaLocation);



  
// const salesArray = [];
//   for (let i = 0; i < hours.length; i++) {
//     const numCustomers = randomCustNumber(store.minCust, store.maxCust);
//     const hourSales = Math.ceil(numCustomers * store.aveCookies)
//     salesArray.push(hourSales);
// }


const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

const headerRow = document.createElement('tr')
  tableElem.appendChild(headerRow);

const hourHeaderCell = document.createElement('th')
  headerRow.appendChild(hourCell);
  hourHeaderCell.textcontent = 
  for( let i = 0; hours.length - 1; i++
    )

  
  // add the table




  const dogsHeaderCell = document.createElement('th');
  headerRow.appendChild(dogsHeaderCell);
  dogsHeaderCell.textContent = "Dogs";

  const catsHeaderCell = document.createElement('th');
  headerRow.appendChild(catsHeaderCell);
  catsHeaderCell.textContent = "Other Cats";

  // add data row
  const dataRow = document.createElement('tr');
  tableElem.appendChild(dataRow);

  // add data cells
  const kidsDataCell = document.createElement('td');
  dataRow.appendChild(kidsDataCell);
  kidsDataCell.textContent = this.isGoodWithKids;

  const dogsDataCell = document.createElement('td');
  dataRow.appendChild(dogsDataCell);
  dogsDataCell.textContent = this.isGoodWithDogs;

  const catsDataCell = document.createElement('td');
  dataRow.appendChild(catsDataCell);
  catsDataCell.textContent = this.isGoodWithCats;

