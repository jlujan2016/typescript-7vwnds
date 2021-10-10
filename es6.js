var nombre = 'jose';
let apellido = 'lujan';

let demo = function () {
  console.log('test');
};
setTimeout(function () {
  console.log('tiempo');
}, 3000);

//Arrow function
let demoArrrow = () => console.log('demo2');
let demoTwoArrow = () => {
  console.log('demo3');
};

let fullName = 'jose lujan';
console.log('el nombre es' + fullName + 'aprobado');
console.log(`El nombre es  ${fullName} aprobado`);
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}

for (let index in numbers) {
  console.log(index);
}
