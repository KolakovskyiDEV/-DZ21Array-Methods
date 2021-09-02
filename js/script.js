// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a + b, c + d’.
// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.Результаты сложите, присвойте переменной result.Выведите на экран значение этой переменной
// 3. Дан массив[[1, 2, 3], [4, 5, 6], [7, 8, 9]].Выведите на экран цифру 4 из этого массива.
// 4. Дан объект { js: [‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’ }.Выведите с его помощью слово ‘jQuery’.
// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.Пример: arrayFill(‘x’, 5) сделает массив[‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
// 8. Дан массив с числами.Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10 - ти.
// 9. Дан массив с числами.Не используя метода reverse переверните его элементы в обратном порядке.
// 10. Дан двухмерный массив с числами, например[[1, 2, 3], [4, 5], [6]].Найдите сумму элементов этого массива.Массив, конечно же, может быть произвольным.
// 11. Дан трехмерный массив с числами, например[[[1, 2], [3, 4]], [[5, 6], [7, 8]]].Найдите сумму элементов этого массива.Массив, конечно же, может быть произвольным.



//1
arr = ['a', 'b', 'c', 'd'];
let cutObj1 = arr.slice(0, 2);
let cutObj2 = arr.slice(2, 4);
cutObj1.join('+');
cutObj2.join('+');
console.log(cutObj1.join('+') + ',' + cutObj2.join('+'));
//2
arr2 = [2, 5, 3, 9];
let result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);
//3
arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result3 = arr3.find(function (elem) {
    return elem.find(function (num) {
        return num === 9;
    });
});
let numberValue = result3.find(function (elem1) {
    return elem1 === 9
})
console.log(numberValue);
//4
arr4 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
// console.log(arr4.js[0]);
function jsFind() {
    for (let key in arr4) {
        if (key === 'js') {
            return arr4[key];
        }
    }
}
let result4 = jsFind();
console.log(result4.shift());
//5
function addX() {
    arr5 = [];
    let elem1 = 'x';
    let elem2 = 'x';

    for (let i = 0; i < 10; i++) {
        arr5.push(elem1);
        elem1 += elem2;

    }
    return arr5;
}
console.log(addX());
//6
function addNumber(n) {
    arr6 = [];
    for (let i = 1; i <= n; i++) {
        let step = '';
        for (let j = 0; j < i; j++) {
            step += i
        }
        console.log(step)
        arr6.push(step);

    }
    return arr6;
}
console.log(addNumber(5));
//7.
function arrayFill(item, number) {
    arr7 = [];
    for (i = 0; i <= number; i++) {

        arr7.push(item);
    }
    return arr7;
}
console.log(arrayFill('x', 5));
//8.

let arr8 = [2, 3, 2, 5, -2, -3];
function arrSum(params) {
    let result8 = 0;
    for (i = 0; i < params.length; i++) {
        result8 += params[i];
        if (result8 > 10) {
            return ++i;
        }
    }
}
let sumItems = arrSum(arr8);
console.log(sumItems);
//9

let arr9 = [22, 33, 44, 55, 66, 77];
function reverse(num) {
    newArr = [];
    num.forEach(function (item) {
        newArr.unshift(item)
    });
    return newArr;
}
console.log(reverse(arr9))


//10
arr10 = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

function sum1(array) {

    array.forEach(function (value) {
        Array.isArray(value) ? sum1(value) : sum += value;
    });

    return sum;
}

console.log(sum1(arr10));
//11
arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumNumber = 0;
function sum2(array) {

    array.forEach(function (value) {
        Array.isArray(value) ? sum2(value) : sumNumber += value;
    });

    return sumNumber;
}

console.log(sum2(arr11));
