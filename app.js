const numbers = [1, 2, 3];
console.log(numbers);

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

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems); // Array from method will convert array like object or iterable in to real array
for (const li of arrayListItems) {
  console.log(li.textContent);
}

const hobbies = ['Playing Games', 'Coding'];
const personalData = ['Nikhil', 27, { moreData: [] }];

const analyticsData = [
  [1.2, 5],
  [3, 6],
  [4, 8],
];

for (const data of analyticsData) {
  for (const dataPoints of data) {
    console.log(dataPoints);
  }
}

console.log(personalData[1]);
