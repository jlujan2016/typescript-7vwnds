// TypeScript
//Tipos primitivos
let edad: number = 10;
let idDone = true; //false
let lasName: string = 'Lujan'; // "comilla doble"  `literal`

let userName = 'Jose Lujan';
edad = 15;

userName = 'juan';

let genero: 'm' | 'f' = 'm';

let prueba;
prueba = 9;
prueba = 'jose';

let pruebaAny: any = true;
pruebaAny = 1;

//arrays
let numbers: number[] = [1, 2, 3, 4];
let numberTwo: Array<string> = ['jose', 'maria'];

//tupla
let tuple: [number, string] = [1, 'jose'];


//function
function sum(a: number, b: number): number {
  return a + b;
}

//funcion nova retornar nada
function print(): void {
  console.log('imprimir');
}