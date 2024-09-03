/* TYPE ANNOTATIONS
   TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.
*/
let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

// console.log(awesomeName);

/* CHALLENGE */
// 1. String
let greeting: string = 'Hello, TypeScript!';
greeting = greeting.toUpperCase(); // This should work fine

// 2. Number
let age: number = 25;
age = age + 5; // This should work fine

// 3. Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult; // This should work fine

// 4. Assigning different types
// Uncommenting any of these will result in a TypeScript error
// greeting = 10; // Error: Type 'number' is not assignable to type 'string'
// age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'
// isAdult = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'

/* UNION TYPES
   In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.
*/

let tax: number | string = 10;
tax = 100;
tax = '$10';

// console.log(tax);

// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';

// console.log(requestStatus);

/* TYPE ANY 
In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - "unknown" and "never"
*/

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// console.log(notSure);

// EXAMPLE OF TYPE ANNOTATIONS
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

// console.log(foundBook?.length);

/* CHALLENGE */
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'cancelled'; // This will result in a TypeScript error

let discount: number | string = 20;
discount = '20%';

/* Arrays - Fundamentals 
   In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.
*/

let prices: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];
// fruit.push(1);
// let people: string[] = ['bobo', 'peter', 1];

// be careful "[]" means literally empty array
// let randomValues: [] = [1];

// be careful with inferred array types
// let names = ['peter', 'susan'];
// let names = ['peter', 'susan', 1];
let array: (string | boolean)[] = ['apple', true, 'orange', false];

// CHALLENGE
// 1. Temperatures
let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot'); // This will result in a TypeScript error

// 2. Colors
let colors: string[] = ['red', 'green', 'blue'];
// colors.push(true); // This will result in a TypeScript error

// 3. Mixed Array
let mixedArray: (number | string)[] = [1, 'two', 3];
// mixedArray.push(true); // This will result in a TypeScript error

/* OBJECT - FUNDAMENTALS 
In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.
*/

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property

// CHALLENGE
let bike: { brand: string; year: number } = { brand: 'honda', year: 2020 };

let laptop: { brand: string; year: number } = { brand: 'apple', year: 2021 };

let product1 = { title: 'book', cost: 20 };
let product2 = { title: 'pen', cost: 5 };
let product3 = { title: 'notebook' };

let products: { title: string; cost?: number }[] = [
  product1,
  product2,
  product3,
];
