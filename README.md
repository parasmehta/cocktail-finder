Welcome to the LOFINO Coding Assignment!

Your task is to complete the implementation of a Cocktail Finder service.

# Prerequisites

- an installation of Node.js and npm
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

We have provided starter code in the `server.js` file. The `getAllDrinks()` function returns a **Promise** with a list of all the cocktails in the database.

# Your task

Write a function to retrieve all the cocktails that can be prepared using a given set of ingredients. Use the provided function `getAllDrinks()` to get all the cocktails from the database and complete the implementation of the `getMatchingDrinks()` function.

Please remember to call the provided `getAllDrinks()` function in your implementation of `getMatchingDrinks()`

# What we expect

- Make a copy of your repository by forking it and submit your changes by submitting a pull request via GitHub
- Make sure that all the tests are passing
- Write clean code following best practices
- Feel free to add comments on the code if you want to explain something or on a place that could be improved
  - you can also add comments on the bottom of this document
- When you're done send an email to paras.mehta@lofino.de

# Your Notes

Here you can add your own notes and comments about the project.
For example, what trade offs did you have to decide for? What would you have done differently if you had more time?
