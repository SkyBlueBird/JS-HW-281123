// Доманя робота 9

// Домашня робота:
// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

let addP = document.getElementById('color-push');
let newP = document.createElement('p');
newP.textContent = 'КОЛІР КНОПКИ';
newP.style.color = 'blue';
newP.addEventListener('click', function() {
    newP.style.color = 'green';
})
addP.appendChild(newP);


// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

let elemNew = document.createElement('div');
Object.assign(elemNew.style, {
    width: '50px',
    height: '50px',
    backgroundColor: 'green',
    border: '1px solid',
});
elemNew.ondblclick = function(){
    elemNew.style.width = '100px';
    elemNew.style.height = '100px';

}

document.body.appendChild(elemNew);

// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. 
// Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let newButton = document.createElement('button');
newButton.textContent = '0';
let cont = 0
newButton.addEventListener('click', function() {
    if (cont +=1 && cont <10) {
        newButton.textContent = `${cont}`        
    }
});

document.body.appendChild(newButton);

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. 
// Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

let oneButton = document.createElement('button');
oneButton.textContent = "minus div"
document.body.appendChild(oneButton);

let divArr = [];

for (let i =0; i < 10; i++){
    let oneDiv = document.createElement('div');
    oneDiv.textContent = "the div";
    divArr.push(oneDiv);
    document.body.appendChild(oneDiv);
}

oneButton.addEventListener('click', function() {
    if (divArr.length > 0) {
        let removedDiv = divArr.pop();
        document.body.removeChild(removedDiv);
    }
});






//            д/з 8                                   Я не зрозуміла це завдання: 
//  const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
//     // Додайте ще пункти меню за потреби
// ];
// 3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.


// дз 8 додаткові:

// 4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color



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


// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та
// викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.


// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.