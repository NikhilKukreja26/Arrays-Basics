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
