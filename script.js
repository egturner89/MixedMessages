const generateRandomNumber = (num) => {
  // Generate a random integer from 0 to num - 1
  return Math.floor(Math.random() * num);
};

const positions = ['goalkeeper', 'defender', 'midfielder', 'forward'];
const nations = ['Argentina', 'Brazil', 'England', 'France', 'Germany', 'Italy', 'Portugal', 'Spain'];
const leagues = ['the Premier League', 'La Liga', 'Serie A', 'the Bundesliga', 'Ligue 1', 'the Eredivisie'];

let permutations = [];

// Loop over all possible combinations of position, nation, and league using nested loop:
for (let x = 0; x < positions.length; x++) {
  for (let y = 0; y < nations.length; y++) {
    for (let z = 0; z < leagues.length; z++) {
      let permutation = `You are a ${positions[x]}, from ${nations[y]}, playing in ${leagues[z]}.`;
      permutations.push(permutation);
    }
  }
};

// Create function to log to the console a random selection from the permutations array
let logPermutation = () => {
  let randomPermutation = generateRandomNumber(permutations.length);
  console.log(permutations[randomPermutation]);
};

// Invoke function declared above
logPermutation();
 