const generateRandomNumber = (num) => {
  // Generate a random integer from 0 to num - 1
  return Math.floor(Math.random() * num);
};

const positions = ['goalkeeper', 'defender', 'midfielder', 'forward'];
const nations = ['Argentina', 'Brazil', 'England', 'France', 'Germany', 'Italy', 'Portugal', 'Spain'];
const leagues = ['the Premier League', 'La Liga', 'Serie A', 'the Bundesliga', 'Ligue 1', 'the Eredivisie'];

// Generate a random index for each array
let selectPosition = positions[generateRandomNumber(positions.length)];
let selectNation = nations[generateRandomNumber(nations.length)];
let selectLeague = leagues[generateRandomNumber(leagues.length)];

// Define the message function using template literals
let message = () => {
  return `You are a ${selectPosition}, from ${selectNation}, playing in ${selectLeague}.`;
};

// Log the message to the console
console.log(message());
