console.log('client.js is sourced');

var app = angular.module('FoodApp', []);

app.controller('FoodController', function(){
    console.log('FoodController loaded');
    
    var self = this;
    self.food = 'candy';
});