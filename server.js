/* 

Recruiting exercise for Full-Stack Developer position at LOFINO GmbH 

*/

const db = require("./db.json");

/*
Returns the number of cocktails in the database
*/
const drinksCount = () => {
  return Promise.resolve(db.drinks.length);
};

/*
Returns all cocktails in the database
*/
const getAllDrinks = () => {
  return Promise.resolve(db.drinks);
};

/*
Given an array of ingredients, e.g. ["Triple sec", "Sugar", "Lime Juice"], 
return all cocktails in the database which I can make using these ingredients.

Below is the function signature for getMatchingDrinks. Please complete the function implementation.
*/

function getMatchingDrinks(ingredients) {
  return Promise.resolve([
    {
      id: "11064",
      name: "Banana Daiquiri",
      ingredients: [
        "Light rum",
        "Triple sec",
        "Banana",
        "Lime juice",
        "Sugar",
        "Cherry"
      ]
    }
  ]);
}

module.exports = getMatchingDrinks;
