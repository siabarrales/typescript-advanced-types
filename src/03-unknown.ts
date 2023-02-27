let anyVar: any = 10;
anyVar = true;
anyVar = 'any text';

let isNew: boolean = anyVar;

// es peligroso trabajar con any, porque no se sabe que tipo de dato es, y puede causar errores en el codigo

let unknownVar: unknown = 10;
unknownVar = true;
unknownVar = 'any text';

// let isNew2: boolean = unknownVar;
// unknow es distinto a any, porque no se puede asignar a otro tipo de dato, pero si se puede hacer un chequeo de tipo

if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar;
}

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

//si se hace un chequeo de tipo, se puede asignar a otro tipo de dato y acceder a los metodos de ese tipo de dato

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
