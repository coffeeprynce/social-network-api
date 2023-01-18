const names = [
    'Dennis',
    'Dee',
    'Frank',
    'Charlie',
    'MAC',
    'Cricket',

];

const addDescriptions = [
    '5-star man',
    'Bird',
    'Mantis Taboggin MD',
    'Janitor',
    'Catholic',
    'Street rat',
]

// Get a random item
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;


const getRandomFriends = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      friendName: getRandomArrItem(addDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomFriends };