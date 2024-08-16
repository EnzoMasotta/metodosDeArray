const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 599,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const pizzasConIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);

console.log('Pizzas con ID impar:');
pizzasConIdImpar.forEach(pizza => {
    console.log(`ID: ${pizza.id}, Nombre: ${pizza.nombre}`);
});

const menosDe600 = pizzas.filter(pizza => pizza.precio < 600);
const cantidadPizzasBaratas = menosDe600.length;
const termino = cantidadPizzasBaratas === 1 ? 'pizza' : 'pizzas';
const termino2 = cantidadPizzasBaratas === 1 ? 'vale' : 'valen';

if (cantidadPizzasBaratas > 0) {
  console.log(`Sí, hay ${cantidadPizzasBaratas} ${termino} que ${termino2} menos de $600.`);
} else{
  console.log("No hay ninguna pizza que valga menos de $600.");
}

pizzas.forEach(pizza => {
  console.log(`Nombre: ${pizza.nombre}, Precio: $${pizza.precio}`);
});

pizzas.forEach(pizza => {
  console.log(`Nombre: ${pizza.nombre}, Ingredientes: ${pizza.ingredientes.join(', ')}`);
});