let sum = 0;
let a = prompt('Введите число:');

while (a !== null) {
 if (isNaN(a)){
   a = 0;
 } else { 
   sum = sum + parseInt(a);
   a = prompt ('Введите число:');
 }
}

alert ('Сумма введенных чисел: ' + sum + '.');