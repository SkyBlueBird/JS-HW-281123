let myObj = new Object();
let YOURoBJ = {};
console.log(myObj);
console.log(YOURoBJ);

// Домашня робота:
// Переишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }

for(let i = 0; i < 5; i++){
    console.log(i);
}

let message = "text";
function example() {
    if (true) {
        let message = "Hello world!";
        console.log(message);
    }
    console.log(message);
}

example();

// Використовуючи for in  виведіть значення з обєктку в console.log
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (let key in person) {
    console.log(`property name: ${key}, property value: ${person[key]}`);
}

// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for(let arr of students){
        for(let key in arr){
        console.log(`name: ${key}, value: ${arr[key]}`);
        }
}


// Завдання на map
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

let numbers = [2, 3, 4, 5, 6];
let newNumbers = numbers.map((value, index, array) =>value*value)
console.log(newNumbers);


let nmbrs = [8, 9, 10, 11].map((value, index, array) => value*value);
console.log(nmbrs);

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, 
//в якому кожен елемент отримує  стрінг до значення 'new value'

function againNumbers() {
    let numbersNew = numbers.map((value, index, array) =>`new value: ${value}`);
    console.log(numbersNew);
}

againNumbers(numbers);

// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад 

//ТУТ ЩОСЬ ПІШЛО НЕ ТАК:

const numberArr = [10,20,30];

function Arrnumb() {
    let sum = numberArr.forEach((value) => sum + value);
    console.log(sum);
}
Arrnumb();


// Додаткове завдання:
// Напишіть функцію, яка використовує forEach для створення масиву, що містить лише унікальні елементи вихідного масиву.
// Тобто якщо предаєте numberArr = [10,20,30, 20, 10] отримуєте numberArr = [10,20,30]


// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та
// викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.


// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.