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
// const skills = ['Dart', 'Flutter'];
// skills.push('Firebase'); // push at the end of the array and also returns the new array length after adding
// skills.unshift('HTML'); // add at the beginning of the array and it shifts the elements to the left side of the array and also returns the new array length after adding
// const poppedValue = skills.pop(); // remove the last element from the array and also returns the removed element
// console.log(poppedValue);
// const shiftedValue = skills.shift(); // shift the elements to the left side of the array and also returns the removed element
// console.log(shiftedValue);
// console.log(skills);

// console.log('-----------------------');

// Direct manipulate using direct index access
// skills[1] = 'JavaScript';
// console.log(skills);

// console.log('-----------------------');

// Splice method
// skills.splice(0, 0, 'Wordpress'); // it takes start index from where to start, second parameter delete count if we want to delete the items and last the elements we want to add as many as we can add it
// console.log(skills);

// console.log('-----------------------');

// skills.splice(3, 0, 'CSS'); // it will add the element at specified index
// console.log(skills);

// console.log('-----------------------');

// const removedElements = skills.splice(-2, 1); // it will start from end of the array delete the second last element
// console.log(removedElements);

// console.log('-----------------------');

// console.log(skills);

// console.log('-----------------------');

// skills.splice(0); // it will delete all the elements from and including starting index
// console.log(skills);

// console.log('-----------------------');

// Slice method
// const testResults = [1, 2, 6, 8.9, 23, 26, 29];

// testResults.push(3); // this will affect to storedResults array because of reference objects

// const storedResults = testResults.slice(0, 2); // slice method will create brand new array from copying old array it will start from zero and go to the specified index but excluding that specified index
// const storedResults = testResults.slice(1, 2);
// const storedResults = testResults.slice(3, 2); // will not because of reverse order
// const storedResults = testResults.slice(-3, 2); // will not because both needs to be negatives
// const storedResults = testResults.slice(-3, -2); // this will select the elements from end of the array and go to specified index but excluding the specified index
// testResults.push(3); // this not affected the storedResults array

// console.log(storedResults, testResults);

// concat method
// const testResults = [1, 2, 6, 8.9, 23, 26, 29];

// const storedResults = testResults.concat([24, 31]); // this will create brand new array and copies the existing array and it takes one or more array objects and this will not create nested array but it take the elements from arrays and it will add at the end of array
// testResults.push(3); // this not affected the storedResults array

// console.log(storedResults, testResults);

// indexOf() and lastIndexOf() method
// const testResults = [1, 2, 6, 8.9, 23, 26, 23, 29];
// console.log(testResults.indexOf(23)); // start from the left and will give the index of specified element which found first and it will ignore duplicates
// console.log(testResults.lastIndexOf(23)); // this will start from right

// const persons = [{ name: 'Nikhil' }, { name: 'Akshay' }];
// console.log(persons.indexOf({ name: 'Nikhil' })); // indexOf will not work for reference objects because we are creating another object and if two objects are same it will still ignore this

// find() and findIndex() method
// const persons = [{ name: 'Nikhil' }, { name: 'Akshay' }];
// const akshayIndex = persons.find((person, index, persons) => {
//   return person.name === 'Akshay';
// the find take a function with 3 parameters
// first is object. second is index and third is array
// the find method will return the same object which we are looking for and it works with same object
// });

// akshayIndex.name = 'Sanket'; // this will affect the existing person because of reference value concept

// console.log(akshayIndex);
// console.log(persons);

// console.log('-----------------------');

// const nikhilIndex = persons.findIndex((person, index, persons) => {
//   return person.name === 'Nikhil';
// the findIndex will return the index of element we are looking for
// });

// console.log(nikhilIndex);

// includes() method
const testResults = [1, 2, 6, 8.9, 23, 26, 23, 29];
console.log(testResults.includes(23)); // check if elements exists or not
console.log(testResults.indexOf(23) !== 1); // indexOf will return -1 if element is not found
