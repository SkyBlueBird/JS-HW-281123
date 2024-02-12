console.log("Hello")



// // Домашня робота:
// // Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), 
// // і викликає цю функцію для кожного елемента масиву.

function hiUsers(user) {
    console.log(`Вітаю ${user}`);
}
function wellcomeUser(user, hiUsers){
    for(let i =0; i < user.length; i++) {
        hiUsers(user[i]);
    }
    
}

let user = ['Anna', 'Tom', 'Den', 'Dima', 'Alex'];
wellcomeUser(user, hiUsers);


// // Стрілкові функції
// // перепишіть попередню функцію в стрілкову

hiUsers1 = (users) => {console.log(`Вітаю ${users}`)};

wellcomeUser1 = (users, hiUsers) => {for(let i = 0; i < users.length; i++) { hiUsers(users[i]);}}; 

let users = ['html', 'css', 'js'];
wellcomeUser1(users, hiUsers);


// // Перепишіть стрілкову функцію в звичайну 
// // const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c){
    return a * b * c;
}

// // push:
// // Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let arr1 = [];
arr1.push(15, 18, 28, [1, 2, 3]);

console.log(arr1);

// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let arr2 = [];

function newElement(element){
    arr2.push(element)
}
newElement(154);
console.log(arr2);

// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let arr3 = [1, 2 , 3, 4, 5,];
let elem = arr3.pop();
console.log(elem);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let arrLast = [25, 28, 29, 31];

function lastElement(newNumber){
    newNumber.pop();
}
lastElement(arrLast);
console.log(arrLast);

let num = [12, 15, 28, 55];

function myNumbers(newOrder){
    newOrder.pop();
}
myNumbers(num);
console.log(num);


// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

arr3.unshift(55);
console.log(arr3);


// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

function addElement(adding){
    adding.unshift(11);
}
addElement(arr3);
console.log(arr3);

shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

arr3.shift(0);
console.log(arr3);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

function minusOne(firstMinus) {
    firstMinus.shift(0);
}
minusOne(arr3);
console.log(arr3);

// Додаткова робота:

// Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  значення "Remove"  
// з масиву  - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]

let newArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];

newArray.splice(1, 1);
newArray.splice(2, 1);
newArray.splice(4, 1);
newArray.splice(4, 1);


console.log(newArray);

// Написати цикл який замінює відємне значення в масиві на 0  

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for (let i =0; checkArr.length >i; i++){
    if (checkArr[i]<0){
        checkArr[i]=0;
    }  
}
console.log(checkArr);

// Створити цикл який виводить значення в консоль в такому форматі "Сьогодні ....  у вас такі плани .."
//  для данних використовує два массива 
let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідни"];

for(let i = 0; i<days.length; i++){                           //у даному випадку i перебирає усі значення days & plans
    console.log(`Сьогодні ${days[i]}  у вас такі плани ${plans[i]}`);
}



// Створіть функцію калькулятор яка отримує 2 значення і колбек функцію дії, далі в залежності 
// від знаку ми викликаємо нашу функцію з данними  наприклад calculatorFn(2,3, summ).



// Створіть функцію modifyArray яка приймає массив та колбек функцію та повертає
//  новий массив в якому кожне значення массиву змінене колбек функціє. ( наприклад помножене на 2 )

let changeArr = [25, 26, 27, 28, 29];


function toChange(element){
    let newOption = [element*2];
    console.log(newOption)
}

function modifyArray(changeArr, toChange){
    for(let i = 0; i< changeArr.length; i++){
        toChange(changeArr[i]);
    }

}
modifyArray(changeArr, toChange);



// щось не так але не розумію що саме (((