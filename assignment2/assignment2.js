const numbers = [];

for (let i = 0; i < 5; i) {
  const number = prompt('Enter your number' + (i + 1) + ':');
  numbers.push(number);
}

console.log('Numbers:', numbers);

const enterednumbers = Number(prompt('Enter your number'));

if (numbers.includes(enterednumbers)) {
  console.log('Number' + enterednumbers + 'is found in the array');
} else {
  console.log('Number' + enterednumbers + 'is not found in the array')
}

numbers.pop()

console.log('Updated numbers:', numbers);

numbers.sort((a, b) => a - b);

console.log('Sorted Numbers:', numbers);
