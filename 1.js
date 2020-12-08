console.log(`Задача 1`)
let a = 5;
let st = "line";
let bl = true;
let n = null;

console.log(a + st); //int + string == string
console.log(a + bl); //int + boolean == int
console.log(a + n); //int + null == int
console.log(st + bl); //string + boolean == string
console.log(st + n); //string + null = string
console.log(bl + n); //boolean + null == int
