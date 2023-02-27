// never es un tipo de dato que nunca va a retornar un valor
// es decir, nunca va a terminar la ejecución de la función

//ts no permite que se ejecute el código si es never, ademas lo infiere
const withoutEnd = () => {
  while (true) {
    console.log('Hola');
  }
};

//tampoco ejecuta el código
const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    console.log(input);
  } else if (Array.isArray(input)) {
    console.log('es un array', input);
  } else {
    fail('El valor no es un string');
  }
};

example('Hola');
example([1, 2, 3]);
//aqui lanza un error y se detiene el programa
example(1);

//este no se ejecuta por que el programa termina en la linea de arriba
console.log('fin');

//el motor de inferencia detecta los tipos de datos never
