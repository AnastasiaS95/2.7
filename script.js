// Задание 1
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

function sumArray(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
}console.log(sumArray(numbers));
// Задание 2
let numbers = [3, 1, 4, 1, 5, 9]; 

function findMax(arr) {
    const maxValue = Math.max.apply(null, numbers);
}
console.log(findMax(numbers)); 

// Задание 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function filterArray(numbers) {
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i])
    }
}
}
console.log(filterArray(numbers)); 
// Задание 4
const numbers = [1, 4, 9];
numbers.forEach = function(callback) {
    console.log(this);
    for(let i = 0; i < this.length; i++) {
        callback(this[i], this);
    }
};
numbers.forEach((item, items) => {
    console.log(item, items);
})

// Задание 6
let numbers = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
console.log(reverseArray(numbers)); 
