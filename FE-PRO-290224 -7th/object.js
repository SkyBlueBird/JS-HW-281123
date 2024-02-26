// Домашня робота:
// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

const wordsLine = "Створіть рядок, який містить слова, розділені пробілами";
const wordsArray = wordsLine.split(" ");
const newArray = wordsArray.map(word => word.toUpperCase());

console.log(newArray);


// Перевірка Високосного Року
// Реалізуйте функцію, яка перевіряє, чи є рік, заданий датою, високосним.

function isLeapYear(year) {
    return (year % 4 == 0) || (year % 400 == 0);
  }
  
    let yearToCheck = Number(prompt('Enter any year:'));
  if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} є високосним роком.`);
  } else {
    console.log(`${yearToCheck} не є високосним роком.`);
  }
  

// Отримання Назви Місяця
// Напишіть функцію, яка приймає об'єкт Date і повертає назву місяця англійською мовою.

function getMonthName(date) {
       const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Отримуємо номер місяця (від 0 до 11) з об'єкта Date
    const monthIndex = date.getMonth();
  
    // Повертаємо назву місяця за його номером
    return monthNames[monthIndex];
  }
  
  const currentDate = new Date();
  const monthName = getMonthName(currentDate);
  
  console.log(`Поточний місяць: ${monthName}`);

  
// Додавання Днів до Дати
// Створіть функцію, яка додає певну кількість днів до заданої дати і повертає нову дату.

function addDaysToDate(myDate, addDate) {
    const newDate = new Date(myDate);
    newDate.setDate(myDate.getDate() + addDate);
    return newDate;
  }
  

  const myDate = new Date('2024-02-15');
  const addDate = 15;  
  const endDate = addDaysToDate(myDate, addDate);
  console.log(`Початкова дата: ${myDate.toDateString()}`);
  console.log(`Нова дата після додавання ${addDate} днів: ${endDate.toDateString()}`);
  

// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку
// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив


    const firstElement = document.querySelector('ul li:first-child');
    const lastElement = document.querySelector('ul li:last-child');
    const thirdElement = document.querySelector('ul li:nth-child(3)');
  
    const allElements = document.querySelectorAll('ul li');
   
    const elementsArray = Array.from(allElements);
   
    console.log('Перший елемент:', firstElement);
    console.log('Останній елемент:', lastElement);
    console.log('Третій елемент:', thirdElement);
    console.log('Всі елементи:', elementsArray);
 


// Створіть на сторінці елемент який вибирається ціми селекторами
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelectorAll('li:nth-child(2)');    

//   це мої борги:

// Додаткова робота:
// Визначення Частоти Слова у Рядку
// Створіть функцію, яка приймає рядок та слово, і повертає кількість разів, скільки це слово зустрічається у рядку.

// Заміна Першої Букви Кожного Слова на Велику
// Розробіть функцію, яка перетворює першу букву кожного слова у рядку на велику, залишаючи решту букв маленькими.


// 4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку
// const numbers = [1, 2, 3, 4, 5];

// 5  Задачі для практики map та Math.round
//  Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого.

// Додаткове завдання:
// 1. Вгадай число
// Гравець має вгадати число, яке програма випадково генерує в заданому діапазоні від 1до 20. Після кожної спроби програма повідомляє, чи є загадане число більшим чи меншим від введеного. Гра триває до вгадування числа 

// 2. Камінь-ножиці-папір
// Гравець вводить свій вибір, а програма генерує власний випадковим чином. Потім визначається переможець за традиційними правилами гри.
// Додаткові матеріали 



// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад 

// Додаткове завдання:
// Напишіть функцію, яка використовує forEach для створення масиву, що містить лише унікальні елементи вихідного масиву.
// Тобто якщо предаєте numberArr = [10,20,30, 20, 10] отримуєте numberArr = [10,20,30]


// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та
// викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.


// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.