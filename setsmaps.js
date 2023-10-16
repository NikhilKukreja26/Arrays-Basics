const ids = new Set([1, 2, 3]);
// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

ids.add(2);
console.log(ids.has(2));
ids.delete(2);
console.log(ids);

for (const entry of ids.values()) {
  console.log(entry);
}

const person1 = { name: 'Nikhil' };
const person2 = { name: 'Tiger' };

const personData = new Map([[person1, [{ date: 'Yesterday', price: 20.99 }]]]);

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.

personData.set(person2, [{ date: 'One week ago', price: 150 }]);

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}

console.log('-----------------');

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

console.log('-----------------');

for (const key of personData.keys()) {
  console.log(key);
}

console.log('-----------------');

for (const value of personData.values()) {
  console.log(value);
}

console.log('-----------------');

console.log(personData.size);

console.log('-----------------');

personData.forEach((value, key) => {
  console.log(key, value);
});

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
