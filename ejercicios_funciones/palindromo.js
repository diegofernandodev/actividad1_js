// Crear una función que determine si una cadena es un palíndromo (se
// lee igual de izquierda a derecha y de derecha a izquierda).

console.log("----------------------------------------------");
console.log("                  Palindromos                 ");
console.log("----------------------------------------------");



function palindromo(cadena) {
    let arreglo = cadena.split("");
    let reverso = arreglo.reverse();

    return cadena == reverso.join("") ? "La cadena es palindromo":"La cadena no es palindromo"
}

const cadena = "amor a roma";

console.log(palindromo(cadena));







