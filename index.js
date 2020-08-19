import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//forEach
// array.forEach(function(item){
//   console.log(item.thingIAmLookingAt);
// });

// // .filter()
// const newArray = array.filter(function(item){
//   return ConditionThatCanBeTrueORFalse;
//   //if it's true it's included / if false it's not
// });

const finalsGame = fifaData.filter(function (item) {
  return item["Year"] === 2014 && item["Stage"] === "Final";
});

console.log(finalsGame);
console.log(finalsGame[0]["Home Team Name"]);
console.log(finalsGame[0]["Away Team Name"]);
console.log(finalsGame[0]["Home Team Goals"]);
console.log(finalsGame[0]["Away Team Goals"]);
console.log(finalsGame[0]["Win conditions"]);
// console.log(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// let finalsData = [];

function getFinals(data) {
  return data.filter(function (item) {
    return item["Stage"] === "Final";
  });
}
console.log(getFinals(fifaData));

//.map()
// return a new array
// does not manipulate the original array
// used for converting data
// needs the return keyword

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {
  let years = data.map((data) => data.Year);
  return years;
}
console.log(getYears(getFinals(fifaData)));

// getYears(getFinals(fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

// console.log(fifaData["Home Team Goals"]);

function getWinners(data) {
  const winners = data.filter(function (item) {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
      return data["Home Team Name"];
    } else if (item["Home Team Goals"] > item["Away Team Goals"]);
    {
      return data["Away Team Name"];
    }
  });
  
}

// console.log(getWinners(getFinals(fifaData)));

// fifaData.filter(function (item) {
//   return item["Year"] === 2014 && item["Stage"] === "Final";
// });

// const finalsGame = fifaData.filter(function (item) {
//   return item["Year"] === 2014 && item["Stage"] === "Final";
// });

// function getWinners(getFinals, data) {
//   let finals = getFinals(data);
//   const winners = finals.filter(function(item){
//       return
//   }
//   return winners;
// };
// getWinners(getFinals, fifaData);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear() {}

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
  /* code here */
}

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
