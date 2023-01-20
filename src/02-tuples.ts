const prices: (number | string)[] = [10, 20, 30, 'hola']; // puede contener numeros y strings

let person: [string, number]; // tupla, tiene que contener un string y un numero en ese orden
person = ['jose', 30];

//desestructuracion de tuplas
const [name, age] = person;

console.log(name, age);

type BooleansStringNumber = [...boolean[], string, number];

const booleansStringNumber: BooleansStringNumber = [
  true,
  false,
  true,
  'hola',
  10,
];
//Se puede usar el spread operator para agregar mas elementos a la tupla ... la ventaja es que se puede usar el type para definir la tupla
console.log(booleansStringNumber);

export {};
