const str = 'ES6';
console.log(`Hello ${str}`);
console.log(`Hello before declaring const: ${hoist}`);
const hoist = 'hoist';
console.log(`Hello after declaration: ${hoist}`);