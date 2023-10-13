// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(); // Empty array
// console.log(moreNumbers);

// const moreNumbers = new Array('Hello', 'Welcome'); // length will be 2
// console.log(moreNumbers);

// const moreNumbers = new Array(1, 5, 3); // length will be 3
// console.log(moreNumbers);

// const moreNumbers = new Array(5); // fixed length of 5 but empty array
// console.log(moreNumbers);

// const moreNumbers = Array(5); // without new keyword fixed length of 5 but empty array
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2); // of method to create array with specified values
// console.log(yetMoreNumbers);

// const moreNumbers = Array.from(12, 34); // This will not work
// const moreNumbers = Array.from('Hii!');
// console.log(moreNumbers); // ['H', 'i', 'i', '!']

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems); // Array from method will convert array like object or iterable in to real array
// for (const li of arrayListItems) {
//   console.log(li.textContent);
// }

// const hobbies = ['Playing Games', 'Coding'];
// const personalData = ['Nikhil', 27, { moreData: [] }];

// const analyticsData = [
//   [1.2, 5],
//   [3, 6],
//   [4, 8],
// ];

// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// * Push, Pop, Shift and Unshift Array Methods
const skills = ['Dart', 'Flutter'];
skills.push('Firebase'); // push at the end of the array and also returns the new array length after adding
skills.unshift('HTML'); // add at the beginning of the array and it shifts the elements to the left side of the array and also returns the new array length after adding
const poppedValue = skills.pop(); // remove the last element from the array and also returns the removed element
console.log(poppedValue);
const shiftedValue = skills.shift(); // shift the elements to the left side of the array and also returns the removed element
console.log(shiftedValue);
console.log(skills);

console.log('-----------------------');

// Direct manipulate using direct index access
skills[1] = 'JavaScript';
console.log(skills);

console.log('-----------------------');

// Splice method
skills.splice(0, 0, 'Wordpress'); // it takes start index from where to start, second parameter delete count if we want to delete the items and last the elements we want to add as many as we can add it
console.log(skills);

console.log('-----------------------');

skills.splice(3, 0, 'CSS'); // it will add the element at specified index
console.log(skills);

console.log('-----------------------');

const removedElements = skills.splice(-2, 1); // it will start from end of the array delete the second last element
console.log(removedElements);

console.log('-----------------------');

console.log(skills);

console.log('-----------------------');

skills.splice(0); // it will delete all the elements from and including starting index
console.log(skills);

console.log('-----------------------');
