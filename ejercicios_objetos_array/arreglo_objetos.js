// Crear un arreglo de objetos que representen productos con
// propiedades como nombre, precio y cantidad en stock. Luego, listar los
// productos con su información.

console.log("----------------------------------------------");
console.log("              Arreglo de objetos              ");
console.log("----------------------------------------------");

let productos = [
    {
        nombre: "computador lenovo",
        precio: 1200000,
        cantidad: 5
    },
    {
        nombre: "computador hp",
        precio: 1600000,
        cantidad: 3
    },
    {
        nombre: "computador dell",
        precio: 1350000,
        cantidad: 6
    }
]

productos.forEach(producto => {
    console.log("Nombre: ",producto.nombre);
    console.log("Precio: ",producto.precio);
    console.log("Cantidad: ",producto.cantidad);
  });
  

