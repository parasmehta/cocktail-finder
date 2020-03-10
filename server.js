/* 

Recruiting exercise for Full-Stack Developer position at LOFINO GmbH 

*/

const db = require("./db.json");

const drinksCount = () => {
  return db.drinks.length;
};

/*
Returns all cocktails in the database
*/
const getAllDrinks = () => {
  return new Promise(resolve => {
    resolve(db.drinks);
  });
};

/*
Given an array of ingredients, e.g. ["Triple sec", "Sugar", "Lime Juice"], 
return all cocktails in the database which I can make using these ingredients.

Below is the function signature for getMatchingDrinks. Please complete the function implementation.
*/

function getMatchingDrinks(ingredients) {}
