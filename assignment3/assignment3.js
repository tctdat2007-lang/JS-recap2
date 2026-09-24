const numbers = [];

let input = prompt('Enter your number (or "done" to finish):');

while (input !== 'done') {
  numbers.push(Number(input));

  input = prompt('Enter your number (or "done" to finish):');
}

const evennumber = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evennumber.push(number);
  }
}

if (evennumber.length > 0) {
  document.write('Even numbers: ' + evennumber);
} else {
  document.write('Even numbers: None');
}

document.write('<br>Program ends');
