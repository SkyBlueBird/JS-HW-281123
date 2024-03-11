// Домашня робота 10

// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера 
// з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", 
// "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

let newMenu = document.querySelector('.user-menu');

function showMenu(event){
    event.preventDefault();    // відміняє стандартну поведінку браузера
    newMenu.style.left = `${event.clientX}px`;
    newMenu.style.top = `${event.clientY}px`;
    newMenu.style.display = `block`;   
    
    document.addEventListener('click', hideNewMenu);
};

function hideNewMenu() {
    newMenu.style.display = 'none';
    document.removeEventListener('click', hideNewMenu);
};

document.addEventListener('contextmenu', showMenu); // подія правого кліку для виклику функції showMenu

// Завдання 'onMouseOver' і 'onMouseOut': 
// Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або 
// підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

window.onload = function() {

    let cat = document.getElementById('cute-cat');
    cat.addEventListener('mouseover', mouseOverEvent);
    cat.addEventListener('mouseout', mouseOutEvent);

    function mouseOverEvent(){
        cat.style.transform = 'scale(1.2)';
        cat.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    }

    function mouseOutEvent(){
        cat.style.transform = 'scale(1)';
        cat.style.boxShedow = 'none';
    }

};

// Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за 
// допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена


window.onload = function() {
    let gameBox = document.querySelector('.game-box');
    let step = 10;
    
    document.addEventListener('keydown', function(event) {
        handleKeyPress(event);
    });

    function handleKeyPress(event) {
        let currentLeft = parseInt(gameBox.style.left) || 0;
        let currentTop = parseInt(gameBox.style.top) || 0;

        switch (event.key) {
            case 'ArrowLeft':
                gameBox.style.left = `${currentLeft - step}px`;
                break;
            case 'ArrowRight':
                gameBox.style.left = `${currentLeft + step}px`;
                break;
            case 'ArrowUp':
                gameBox.style.top = `${currentTop - step}px`;
                break;
            case 'ArrowDown':
                gameBox.style.top = `${currentTop + step}px`;
                break;
        }
    }
};


// v1
// Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М and ctrl, 
// з'являється  меню ul елемент в якому 3 li, При натиску клавіші ctrl K меню зникає.

window.onload = function() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'm' && event.ctrlKey) {
            showMenu();
        } else if (event.key === 'k' && event.ctrlKey) {
            hideMenu();
        }
    });

    function showMenu() {
        const menu = document.querySelector('.just-menu');
        menu.style.display = 'block';
    }

    function hideMenu() {
        const menu = document.querySelector('.just-menu');
        menu.style.display = 'none';
    }
};

// v2
// Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М, 
// з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по пунктах меню, використовуючи клавіші 
// вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає.

// Додаткова робота:
// event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

// 'onMouseDown' і 'onMouseUp': Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної 
// області, використовуючи події натискання та відпускання кнопки миші.





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