// Escribe una función que tome un arreglo como parámetro y devuelva
// la suma de todos sus elementos.

console.log("----------------------------------------------");
console.log("            Funcion arreglo como parametro    ");
console.log("----------------------------------------------");

let suma = 0;

function sumarArreglo(valores) {
    for (let i = 0; i < valores.length; i++) {
       suma += valores[i];
    }
    
    console.log("La suma de los valores es: ", suma);
}

const numeros = [2, 4, 6, 9, 21, 42];

sumarArreglo(numeros);
