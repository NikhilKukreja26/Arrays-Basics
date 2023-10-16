// const ids = new Set([1, 2, 3]);
// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

// ids.add(2);
// console.log(ids.has(2));
// ids.delete(2);
// console.log(ids);

// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: 'Nikhil' };
// const person2 = { name: 'Tiger' };

// const personData = new Map([[person1, [{ date: 'Yesterday', price: 20.99 }]]]);

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.

// personData.set(person2, [{ date: 'One week ago', price: 150 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const entry of personData.entries()) {
//   console.log(entry);
// }

// console.log('-----------------');

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// console.log('-----------------');

// for (const key of personData.keys()) {
//   console.log(key);
// }

// console.log('-----------------');

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log('-----------------');

// console.log(personData.size);

// console.log('-----------------');

// personData.forEach((value, key) => {
//   console.log(key, value);
// });

// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map

let person = { name: 'Maxi' };

const persons = new WeakSet();

persons.add(person);

// person = null;

console.log(persons);

// In JavaScript, a WeakSet is a collection of objects that stores only weakly held objects. WeakSet is similar to a Set, but it deletes objects when they become inaccessible. WeakSet has the following properties:
// It cannot contain primitive type elements
// It cleans up itself automatically
// It does not support properties and methods that do not refer to all the keys or the count of them
// It has a has() method that checks if a WeakSet object contains the specified object element

const personData = new WeakMap();
personData.set(person, 'Extra Information');

person = null;

console.log(personData);

// A WeakMap is a JavaScript object that stores key/value pairs, where the keys can only be objects. The values can be any type of JavaScript object. Unlike a Map, a WeakMap does not create strong references to its keys. This means that if the only reference to an object is as a key in a WeakMap, the object can be garbage collected.
// WeakMaps are often used to store data about objects that you do not want to keep around forever. For example, you could use a WeakMap to store the results of a computation, so that the results can be garbage collected once they are no longer needed.
