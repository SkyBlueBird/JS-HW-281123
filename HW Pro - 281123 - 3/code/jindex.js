// 1. Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];

let result = arr1.concat(arr2);

console.log(result);

// 2. Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.

let arr3 = ['a', 'b', 'c'];

arr3.push("1, 2, 3");

console.log(arr3);

//3. Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].

let arr4 = [1, 2, 3];

let b = arr4.reverse();

console.log(b);

//4. Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.

arr4.push(4, 5, 6);

console.log(arr4);

//5. Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.

arr4.splice(0, 0, 4, 5, 6);

console.log(arr4);

//6. Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.

let arra = ['js', 'css', 'jq'];

let aa = arra.slice(0, 1);

console.log(aa);

//7. Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].

let arrb = [1, 2, 3, 4, 5];

let B = arrb.slice(0,3);

console.log(B);

//8. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].

arrb.splice(1,2);

console.log(arrb);

//9. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].

let arrc = [1, 2, 3, 4, 5];

arrc.splice(2, 0, 10);

console.log(arrc);

//10. Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.

let arrd = [3, 4, 1, 2, 7];

arrd.sort();

console.log(arrd);

//11. Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'.

let arre = [ 'Привіт, ','світ','!' ];

let ab = arre.join("");

console.log(ab);

//12. Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, ').

arre.splice(0,1, 'Поки, ');

let ae = arre.join("");

console.log(ae);

//13. Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.

let arr_1 = new Array(1, 2, 3, 4, 5);
let arr_2 = [1, 2, 3, 4, 5];

/* 14. Дан багатовимірний масив arr:
            
var arr = [
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green'],
];   

Виведіть за його допомогою слово 'блакитний' 'blue' .*/

var arr_3 = [
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green'],
];  

console.log(arr_3[0][0], arr_3[1][0]);

/*15. Створити програму реєстратор нового учасника.  Ми маємо натиснути на кнопку додати нового студента, при натиску на кнопку у 
вас має з'явитись вікно запиту інформації якe приймає дані у вигляді "Імя.Прізвище.Мова програмування". 
Виводити кожного доданого студента на сторінку у таблицю, у футері таблиці має бути поле яке рахуватиме загальну кількість студентів. */

//16. Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.

let arr_4 = ['a', 'b', 'c', 'd']; 
console.log(arr_4[0] + '+' + arr_4[1]+ ',' + arr_4[2] + '+' + arr_4[3]); 
console.log(`${arr_4[0]} + ${arr_4[1]}, ${arr_4[2]} + ${arr_4[3]}`); 


//let arr_4 = ['a', 'b', 'c', 'd']; 

let q = arr_4.splice(0, arr_4.length / 2);
let q2 = arr_4.splice(arr_4.length / 2 - 1)
console.log(q.join("+")+','+ q2.join("+"))

//17. Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, 
// яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.

var G = parseInt(prompt('Кількість елементів масиву:', '0-100 ' )) ;

const arrNumber = new Array (G);

for (let i = 0; i < arrNumber.length; i++) {
    arrNumber[i] = i + 1;
}

console.log(arrNumber);

//18. Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.

for (let i = 0; i < arrNumber.length; i++) {
    arrNumber[i] = i + 1;

    if (arrNumber[i] % 2 !== 0) {
        document.write('<p>' + arrNumber[i] + '</p>');
    }
    else { 
        document.write('<span style="background-color: red;">' + arrNumber[i] +'</span>');
    }

}

//19. Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.

var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];

console.log(vegetables.join())


// не певна, чи вірно зрозуміла завдання 

