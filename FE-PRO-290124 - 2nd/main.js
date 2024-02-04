// Домашня робота:
// Порівняння чисел: За допомогою prompt отримайте два числа від користувача. Використовуючи if, else if, і else, виведіть у консоль, яке з них більше, 
// менше, або вони рівні. Пам'ятайте про різницю між == і ===.

let firstNumber = Number(prompt('Choose the first number:'));
let secondNumber = Number(prompt("Choose the seond number:"));

if (firstNumber === secondNumber) {
    console.log("They are equal!"); 
    
} else if (firstNumber > secondNumber) {
    console.log('The first number is bigger:', firstNumber);

}else {
    console.log('The second number is bigger:', secondNumber);
}

// Перевірка парності: Запитайте у користувача число за допомогою prompt. Використовуючи оператор % та if-else, визначте, чи є число парним або непарним, 
// і виведіть відповідне повідомлення у консоль.

// Визначення року народження: Запитайте в користувача його вік за допомогою prompt. Використовуючи отримане значення та поточний рік (
//     ви можете захардкодити поточний рік), виведіть у консоль рік народження користувача.

let userAge = Number(prompt("How old are you? "));
let currentYear = 2024;

console.log('You were born in', currentYear-userAge);

// Вгадай число: Запитайте у користувача число. Якщо введене число більше заданого вами (наприклад, 10), виведіть "Занадто велике". 
// Якщо менше - "Занадто мале". Якщо користувач вгадав число, виведіть "Вітаємо, ви вгадали!".

let myNumber = 100;

let userNumber = Number(prompt("Guess my number ':) "));

if (userNumber == myNumber) {
    console.log("Good job!");
} else if (userNumber > myNumber) {
    console.log("You number is too big!");
}
else {
    console.log("Your numbr is too small!");
}

// Класифікація за оцінками: Запитайте у користувача його оцінку за 10-бальною шкалою за допомогою prompt. За допомогою if-else виведіть в консоль 
// "Відмінно" (8-10), "Добре" (5-7), "Задовільно" (3-4), "Незадовільно" (менше 3).

let yourMark = Number(prompt("What is your mark up to 10?"));

if (yourMark >= 8) {
    console.log("Відмінно");
}else if (yourMark >= 5 && yourMark <= 7) {
    console.log("Добре");

}else if (yourMark >= 3 && yourMark <= 4){
    console.log("Задовільно");
}else {
    console.log("Незадовільно");
}

// Перевірка діапазону: Запитайте у користувача число. Якщо число знаходиться в діапазоні від 1 до 100 включно, виведіть "Число знаходиться в діапазоні". 
// Якщо ні - "Число поза діапазоном".

let anyNumber = Number(prompt("Оберіть будь-яке число"));

if (anyNumber >=1 && anyNumber<=100){
    console.log("Число знаходиться в діапазоні");
}else {
    console.log("Число поза діапазоном");
}

// Перепишіть використовуючи тернарний оператор
//         let result = '';
//         let score = 75;
//         if (score > 50) {
//             result ="Пройшов";
//         } else {
//             result ="Не пройшов";
//         }
//         let tempResult = "";
//         let temperature = 30;
//         if (temperature > 25) {
//             tempResult ="Гаряче";
//         } else {
//             tempResult ="Прохолодно";
//         }

let score = Number(prompt('Number'));
let rsult = (score > 50 ) ? console.log("Пройшов") : console.log("Не пройшов"); 

let temperature = Number(prompt('Degree'));
let tempResult = (temperature > 25) ? console.log("Гаряче") : console.log("Прохолодно"); 


// Додаткова робота
// Створіть програму для перевірки віку та країни проживання користувача з використанням prompt. Користувач має ввести свій вік та країну. 
// Якщо вік більше 18 років і користувач з України, виведіть "Вітаємо, ви маєте право голосу в Україні". В іншому випадку, якщо вік більше 18, 
// але країна не Україна, виведіть "Перевірте правила голосування у вашій країні". Якщо вік менше 18, виведіть "Ви ще занадто молоді для голосування".

let yourAge = Number(prompt("How old are you?"));
let country = prompt("Where are you from?");

if (yourAge < 18) {
    console.log("Ви ще занадто молоді для голосування");

} else if ( yourAge >= 18 && country != "Ukraine") {
    console.log("Перевірте правила голосування у вашій країні");    

}if (yourAge >= 18 && country === "Ukraine"){
    console.log("Вітаємо, ви маєте право голосу в Україні"); 
}