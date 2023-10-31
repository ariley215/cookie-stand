'use strict';
// global function for all object literals to use
function randomCustNumber(minCust,maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}
// create separate JS object literals for each shop location
// object literal for Seattle
// need to have 
const seattleLocation = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  aveCookieSale: 6.3,
  cookieSalesArray = [],
  
  cookieSalesArray.unshift(1) = aveCookieSale,
  console.log(cookieSalesArray)
  generateCust: function () {
    this.aveCookieSale = randomCustNumber(this.minCust, this.maxCust);
    console.log(this.aveCookieSale);

  },

}


seattleLocation.generateCust();
// console.log(seattleLocation.aveCookieSale);






