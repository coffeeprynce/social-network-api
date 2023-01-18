const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomFriends } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});


  await User.deleteMany({});


  const users = [];

  // Loop 20 times -- add useres to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random friends objects using a helper function
    const friends = getRandomFriends(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      first,
      last,
      github,
      thoughts,
      friends,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertOne({
    thoughtName: 'Happy',

    users: [...users],
  });


  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});