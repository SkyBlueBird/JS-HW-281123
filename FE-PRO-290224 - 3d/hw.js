
// Домашня робота:
// - дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert 
// з попередженням. Повині бути команди (додавання, множення, ділення, віднімання)

let userNumberOne = Number(prompt('Choose the first number:'));
let userNumberTwo = Number(prompt('Choose the second number:' ));

function nimus(userNumberOne, userNumberTwo) {
    console.log(`Minus ${userNumberOne} - ${userNumberTwo} = ${userNumberOne-userNumberTwo}`);
}
function plus(userNumberOne, userNumberTwo) {
    console.log(`Plus ${userNumberOne}+ ${userNumberTwo} = ${userNumberOne+userNumberTwo}`);
}
function divide(userNumberOne, userNumberTwo) {
    if (userNumberTwo != 0) {
        console.log(`Devide ${userNumberOne} / ${userNumberTwo} = ${userNumberOne/userNumberTwo}`);
    } else {
        alert('Cannot be divided by zero!')
    }    
}
function multiply(userNumberOne, userNumberTwo) {
    console.log(`Multiply ${userNumberOne} * ${userNumberTwo} = ${userNumberOne*userNumberTwo}`);
}

let userOperations = prompt('Please choose the operator: +, -, *, /');

switch (userOperations) {
    case '-':
        nimus(userNumberOne, userNumberTwo);
        break;
    case '+':
        plus(userNumberOne, userNumberTwo);
        break;
    case '/':
        divide(userNumberOne, userNumberTwo);
        break;
    case '*':
        multiply(userNumberOne, userNumberTwo);
        break;

}

// - за допомогою циклу вивести в консоль всі парні значення числа 20

for(let i=0; i<=20; i+=2){
    console.log(i);
}


// - зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

let userNumber = Number(prompt('Choose any number:'));

for(let i=userNumber; i>=0; --i) {
    
    console.log(i);
}

// - реалізуйте таблицю множення за допомогою циклу
// для конкретного числа (наприклад, для числа 5) за допомогою циклу for:

for(let i =1; i<=10; i++){
    let result = 5 * i;
    console.log(`${i} * 5 = ${result}`);
}

 


// - реалізуйте функцію яка отримує число і виводить в консоль лог таблицю множення цього чила
// перевірте роботу функцію викликавши функцію з різними значеннями.

let smallNumber = Number(prompt('Choose number from 1 till 10:'));

function multiplicationTable(){
    for(let i =1; i<=10; i++){
        let result = smallNumber * i;
        console.log(`${i} * ${smallNumber} = ${result}`);       
    }
    
}
multiplicationTable();


// варіант 2:

function multiplicationTable(smallNumber){
    for(let i =1; i<=10; i++){
        let result = smallNumber * i;
        console.log(`${i} * ${smallNumber} = ${result}`);       
    }
}
multiplicationTable(Number(prompt('Choose number from 1 till 10:')));


// - створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети 
// сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planetName = prompt("Name any planet:")

switch(planetName){
    case "Saturn":
        console.log("this planet in the solar system");
        break;
    case "Venus":
        console.log("this planet in the solar system");
        break;
    case "Earth":
        console.log("this planet in the solar system");
        break;
    default:
        console.log("this planet is not in the solar system");
        break;
    
}