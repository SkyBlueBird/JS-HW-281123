// Домашня робота № 8 :
// 1)пройдіть по масиву і зробіть заповнення таблиці даними з масива
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

 let newData = document.querySelectorAll(`table tr:nth-child(2) td`);
 newData[0].textContent = booksArray[0].title;   // звернулися до нульового td у таблиця та пушнули туди з нульового елементи масиву інформацію з title
 newData[1].textContent = booksArray[0].year;
 newData[2].textContent = booksArray[0].rating;
// вибрали усі елементи td у табличці table у третьому ряду tr
 let nextData = document.querySelectorAll(`table tr:nth-child(3) td`);
 nextData[0].textContent = booksArray[1].title;
 nextData[1].textContent = booksArray[1].year;
 nextData[2].textContent = booksArray[1].rating;
// спочатку звернулися до ID а потім вибрали усі необхідні елементи дочірні елементи - нараіце td
 let lastData = document.getElementById(`last-line`).querySelectorAll(`td`);
 lastData[0].textContent = booksArray[2].title;
 lastData[1].textContent = booksArray[2].year;
 lastData[2].textContent = booksArray[2].rating;


  

// 2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і 
//властивість text-align center

let newElement = document.createElement('header');
newElement.textContent = 'Be happy!'
newElement.style.padding = '50px';
newElement.style.backgroundColor = 'yellow';
newElement.style.textAlign = 'center';

document.body.appendChild(newElement); // елемент спочатку створюється, а потім додається до батьківського


//                                               Я не зрозуміла це завдання: 
//  const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
//     // Додайте ще пункти меню за потреби
// ];
// 3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.




// 4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

let newBlock = document.createElement('div');
newBlock.style.display = 'flex';
document.body.appendChild(newBlock)
for (let i = 0; i < 50; i++){
    let innerBlock = document.createElement('div')
    Object.assign(innerBlock.style, {
        border: '1px solid',
        borderRadius: '5px',
        width: '50px',
        height: '50px',
        backgroundColor: 'light-blue',
    });
    newBlock.appendChild(innerBlock);

}


// Додаткова робота 
// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

function anObject(cont, obj) {
    let elem = document.createElement('div');
    elem.textContent = 'some new tekst';
    document.body.appendChild(elem); // додали новий елемент div 

}
let cont = document.body;
anObject(cont, { });

//  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript елемент створюємо по значенню ключа tag .
    const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];

let newBox = document.createElement('div');
document.body.appendChild(newBox);

elementsArray.forEach(everyElement => {                              // перебираємо всі елементи масиву
    let newElement = document.createElement(everyElement.tag);      // для кожного субїєкту ми стоврюємо новий елемент
    newElement.textContent = everyElement.text;                      // визначаю текст для створених елементів
    newBox.appendChild(newElement);

})

// Створіть блок контейнер в html та перебераючи масив за допомогою js створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером 
// const elementsArray = [
//     { text: 'Елемент 1', usePrepend: true },
//     { text: 'Елемент 2', usePrepend: false },
//     { text: 'Елемент 3', usePrepend: true }
// ]

// спробуйте зробити  завдання 4 так щоб в кожного div елемента був унікальний бекграунд

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



// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]

// Додаткове завдання:
// Напишіть функцію, яка використовує forEach для створення масиву, що містить лише унікальні елементи вихідного масиву.
// Тобто якщо предаєте numberArr = [10,20,30, 20, 10] отримуєте numberArr = [10,20,30]

let someNumbers = [10, 20, 30, 20, 10];

function uniqueArray(mas) {    
    let uniqueArr = [];                                     // створимо пустий масив
    
    for (let i = 0; i < mas.length; i++) {                  // йду циклом по всіх елементах масиву
        
        if (!uniqueArr.includes(mas[i])) {                  // дивлюся чи поточний елемент вже є в uniqueArr
            uniqueArr.push(mas[i]);                         // якщо елементу немає, додаю його до uniqueArr
        }
    }

    return uniqueArr;
}
let result = uniqueArray(someNumbers);
console.log(result);



// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та
// викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.


// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.