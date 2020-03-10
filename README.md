Welcome to the LOFINO Coding Assignment!

Your task is to complete the implementation of a Cocktail Finder service :-)

# Prerequisites

- an installation of Node.js (10+) and npm
- a GitHub account
- your favorite IDE

# Overview

The repository contains a database of cocktails in JSON format inside `db.json`.

Each entry in the file is a cocktail containing an `id`, a `name` and an array of `ingredients`.

```json
{
  "drinks":
    [
      {
        "id": ...,
        "name": ...,
        "ingredients": [...],
      },
    ]
}
```

We have provided starter code in the `server.js` file. The `getAllDrinks()` function returns a **Promise** with an array of all cocktails in the database.

`server.test.js` contains unit tests to test your implementation. We use [jest](https://jestjs.io/docs/en/getting-started) for this. Feel free to add more tests if you want.

# Getting started

- run `npm install` inside the project folder to install dependencies
- run `npm run test` to run the tests or `npm run test -- --watch` to watch for changes of the file
  ```bash
  cd cocktail-finder
  npm install
  npm run test -- --watch
  ```

# Your task

Write a function to retrieve all the cocktails that can be prepared using a given set of ingredients. Use the provided function `getAllDrinks()` to get all the cocktails from the database and complete the implementation of the `getMatchingDrinks()` function.

\* Note Please remember to call the provided `getAllDrinks()` function in your implementation of `getMatchingDrinks()`

# What we expect

- make a copy of this repository by forking it and submit your changes by making a pull request via GitHub
- make sure all tests are passing
- write clean code following best practices
- feel free to add comments on the code if you want to explain something or on a place that could be improved
  - you can also add comments at the bottom of this document
- feel free to add more tests to check the robustness of your solution
- in case of questions, open an issue in the repository or send an email to paras.mehta@lofino.de or tobias.hann@lofino.de
- when you're done send an email to paras.mehta@lofino.de or tobias.hann@lofino.de

# Your Notes

Here you can add your own notes and comments about the project.

For example, what trade offs did you have to decide for? What would you have done differently/better if you had more time?
