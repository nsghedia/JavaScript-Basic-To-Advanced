const items = [
    { name: "Neha Ghedia", age: 25 },
    { name: "Priyanka Ghedia", age: 27 },
    { name: "Rahul Ghedia", age: 29 },
    { name: "Uma Ghedia", age: 48 }
]

const filteredItems = items.filter((item) => {
    return item.age < 30
})

const itemNames = items.map((item) => {
    return item.name
})

const foundItem = items.find((item) => {
    return item.age == 29
})

const hasOldAge = items.some((item) => {
    return item.age > 30
})

const hasAllOldAge = items.every((item) => {
    return item.age < 30
})

const totalAge = items.reduce((currentAge, item) => {
    return item.age + currentAge
}, 0)

const NumberArray = [-1, 5, -62, 6, 3, 7]

console.log(items);

console.log(filteredItems);

console.log(itemNames);

console.log(foundItem);


items.forEach((item) => {
    console.log(item);
    console.log(item.age);
})


console.log(hasOldAge);


console.log(hasAllOldAge);


console.log(totalAge);


console.log(NumberArray.includes(10));
