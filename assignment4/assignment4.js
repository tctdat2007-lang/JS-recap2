function sortArray(numbers) {
  const newArray = [...numbers];

  newArray.sort((a, b) => a - b);

  return newArray;
}

const numbers = [5, 2, 8, 1, 9];

console.log('Original array:', numbers);
console.log('Sorted array:', sortArray(numbers));
