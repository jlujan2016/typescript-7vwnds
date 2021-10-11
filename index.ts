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

const persona = {
  name: 'jose',
  lastName: 'lujan',
};

console.log(persona.name);

//enum
enum Controles {
  Up = 'w',
  Left = 'a',
  Right = 'd',
  Down = 's',
}
/*
const Up='w';
const Left='a';
const Right='d';
const Down ='s' ;
*/

console.log(Controles.Up);

//function
function sum(a: number, b: number): number {
  return a + b;
}

//funcion nova retornar nada
function print(): void {
  console.log('imprimir');
}

type gender = 'm' | 'f';
let sexo: gender = 'm';

class Printer {
  print(name: string, fullName: string): void {
    console.log(name, fullName);
  }
}

//Generacion de Clases
class Alumno extends Printer {
  private name: string;
  private lastName: string;
  constructor(name, lastname) {
    super();
    this.name = name;
    this.lastName = lasName;
    this.printName();
  }
  public printName() {
    this.print(this.name, this.lastName);
  }
}

class AlumnoDos extends Printer {
  constructor(private name: string, private lastName: string) {
    super();
    this.printName();
  }

  printName(): void {
    console.log(this.name, this.lastName);
  }
}

let alumno: Alumno = new Alumno('Jose', 'Lujan');
alumno.printName();

let alumnodos: AlumnoDos = new AlumnoDos('Jose', 'Lujan');
alumnodos.printName();
