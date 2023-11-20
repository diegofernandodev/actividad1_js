// Solicitar al usuario un número y mostrar todos los números pares
// desde 1 hasta ese número.

console.log("-----------------------------------------------------")
console.log("                 Mostrar numeros pares               ")
console.log("-----------------------------------------------------")

const numero = parseInt(prompt("Por favor, ingresa un número:"));

if (!isNaN(numero)) {
    if (numero > 0) {
        for (let i = 1; i <= numero; i++) {
            if (i % 2 == 0) {
                console.log("-> ", i);
            }
            
        }   
    } else {
        for (let i = -1; i >= numero; i--) {
            if (i % 2 == 0) {
                console.log("-> ", i);
            }
            
        }   
    }
} else {
    console.log("valor ingresado no es valido");
}



