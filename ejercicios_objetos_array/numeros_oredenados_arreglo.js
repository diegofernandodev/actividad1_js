// Escribir una función que tome un arreglo de números como parámetro
// y devuelva un nuevo arreglo con los números ordenados de forma
// ascendente.

console.log("----------------------------------------------");
console.log("              Arreglo Ordenado numeros        ");
console.log("----------------------------------------------");

function ordenarNumeros(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

let numeros = [3,5,9,10,34,43,21,1,50,46,37]

console.log(ordenarNumeros(numeros));