'use strict';
// global function for all object literals to use
// my randomInRange function
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function randomCustNumber(minCust,maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}
// create separate JS object literals for each shop location
// object literal for Seattle
// worked with chatGPT and  Diana
const seattleLocation = {
  minCust: 23,
  maxCust: 65,
  aveCookies: 6.3,
  salesArray: [6,7,8,9,11,12,1,2,3,4,5,6,7],
  
  generateCust: function () {
    this.aveCookies = randomCustNumber(this.minCust, this.maxCust);
    console.log(this.aveCookies);

  },


}
const tokyoLocation = {
  minCust: 3,
  maxCust: 24,
  aveCookies: 1.2,
  salesArray:[],


}
const container = document.getElementById('root');
// consider a function that could do this
let cookieStandArticle = document.createElement('article');
container.appendChild(cookieStandArticle);

let heading = document.createElement('h2');
cookieStandArticle.appendChild(heading);
heading.textContent = seattle.name;

let hoursList = document.createElement(ul)
cookieStandArticle.appendChild(hoursList);


for (let i = 0; i <seattleLocation.salesArray.length; i++ ){
  let salesItem = document.createElement('li');
  hoursList.appendChild(salesItem);
  let salesInfo = `${hours[i]}: ${seattleLocation[i]} cookie`;
  salesItem.textContent = salesInfo;
} 






 



