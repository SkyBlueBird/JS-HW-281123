
// Домашня робота:
// -Створіть змінну  userNickname  і розмість там значення типу стрінг
// - Створіть змінну типу userScore  і розмістіть там числове значення
// - Отримайте через prompt 2 значення Ціна покупки  і кількість продуктів та порахуйте  загальну сумму до сплати
// Додаткова робота:
// - вирахуйте скільки буде знижка 5% від загальної суми  розразованох в попередньому завданні

let userNickname = 'Tomas';
let userScore = 10;

let price = prompt('Price of the product:');
let productsQuontity = prompt("How many products: ");
let sum = price*productsQuontity;
console.log('total amount is:', sum);

let discount = sum*0.05;
console.log('ÿour discount is:', discount);



