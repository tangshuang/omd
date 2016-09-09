'use strict';

var House = require('./js/module');
var house = new House();

console.log('Owner: ' + house.owner);
console.log('Prirce: ' + house.price);
console.log('City: ' + house.city);

house.move('Tokoy');
console.log('Move to: ' + house.city);