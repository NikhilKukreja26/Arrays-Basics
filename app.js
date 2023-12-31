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
// const testResults = [1, 2, 6, 8.9, 23, 26, 23, 29];
// console.log(testResults.includes(23)); // check if elements exists or not
// console.log(testResults.indexOf(23) !== 1); // indexOf will return -1 if element is not found

// forEach() method

// const prices = [20, 30, 40, 20];
// const tax = 18;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * tax);
// }

// prices.forEach((price, index, prices) => {
//   const priceObj = { index: index, taxAdjPrice: price * tax };
//   taxAdjustedPrices.push(priceObj);
// forEach is useful when you need an index and don't want manage the index by self in traditional for loop
// });

// console.log(taxAdjustedPrices);

// map() method

// const prices = [20, 30, 40, 20];
// const tax = 18;

// const taxAdjustedPrices = prices.map((price, index, prices) => {
//   const priceObj = { index: index, taxAdjPrice: price * tax };
//   return priceObj;
// The JavaScript map() method is used to transform or modify the elements of an array by applying a provided function to each element. It then returns a new array containing the results of applying the function to each element of the original array.
// });

// console.log(prices, taxAdjustedPrices);

// filter() method
// const prices = [20, 30, 40, 20, 70, 80, 90];

// const filteredArray = prices.filter((price, index, prices) => {
// return price > 20;
// filter using for filtering from array based on some condition
// });

// console.log(filteredArray);

// sort() and reverse() method
// const prices = [100, 20, 40, 30, 10, 70, 50, 60, 80, 90];
// const prices = [5, 3, 2, 1, 4];

// const sortedPrices = prices.sort((a, b) => {
// here we are using three way comparison A<B or A>B or A=B
// if A<B then we return -1. else if A>B then we return 1. else 0 will be return if A and B both are equal.

// console.log(a, b);
// if (a > b) {
//   return 1;
// } else if (a === b) {
//   return 0;
// } else {
//   return -1;
// }

//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(sortedPrices);
// Reversed Method
// console.log(sortedPrices.reverse());

// reduce() method

const prices = [100, 20, 40, 30, 10, 70, 50, 60, 80, 90];

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// const sum = prices.reduce(
//   (previousValue, currentValue, currentIndex, prices) => {
//     return previousValue + currentValue;
//   },
//   0
// );

// the reduce will reduce the value in simpler method and this is shorter version of it.
// const sum = prices.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );

// console.log(sum);

// split() and join() method

// const data = 'India;Mumbai;421005';

// const transformedArray = data.split(';'); // To convert string into array
// console.log(transformedArray);

// spread operator
// const nameFragments = ['Nikhil', 'Kukreja'];
// const name = nameFragments.join(' '); // To convert array into string
// console.log(name);

// const copiedNameFragments = [...nameFragments]; // spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// nameFragments[0] = 'Akshay';

// console.log(nameFragments, copiedNameFragments);

// const persons = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 31 },
// ];
// const copiedPersons = [...persons];

// const copiedPersons = persons.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));

// const copiedPersons = persons.map((person) => {
//   return {
//     name: person.name,
//     age: person.age,
//   };
// });

// persons.push({ name: 'Nikhil', age: 27 });
// persons[0].name = 'Max';
// console.log(persons, copiedPersons);

// const nameData = ['Nikhil', 'Kukreja', 'Mr', 27];

// const [firstName, lastName, ...otherInformation] = nameData; // Array Destructuring from w3 schools
//To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

// Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.

// console.log(firstName, lastName, otherInformation);
