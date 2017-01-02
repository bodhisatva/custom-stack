import Dog from './dog';

const str = 'ES6';
console.log(`Hello before declaring const: ${hoist}`);
const hoist = 'hoist';
const toby = new Dog('Toby');


console.log(`Hello ${str}`);
console.log(`Hello after declaration: ${hoist}`);
console.log(toby.bark());