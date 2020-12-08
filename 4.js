console.log(`Задача 4`);
let year = prompt(`Введите год`);

let rez = ((year % 4 == 0) & (year % 100 != 0) ? `Год високосный` : `Год невисокосный`);
alert(rez)