// Solucion ejercicio 3 

let array = [2, 4, 6, 8, 10];

let suma = array.reduce((accumulator, currentValue)) => accumulator + currentValue, 0;

console.log(suma);


let producto = array.reduce((accumulator, currentValue) => accumulator * currentValue );

console.log(producto);