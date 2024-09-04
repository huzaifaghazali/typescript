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

/* Interface vs Type Alias

1- A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.
2- An interface is a way to define a contract for a certain structure of an object.

Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.

Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.

Interfaces can be implemented by classes, while type aliases cannot.

Type aliases can use computed properties, while interfaces cannot.

*/

interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let john = new Employee('John');
// john.greet(); // Outputs: Hello, my name is John

/* Tuples
In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

Tuples are useful when you want to return multiple values from a function.
*/
let person: [string, number] = ['john', 25]

/* Enums
Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
*/

enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
// console.log(response);


// Object.values(ServerResponseStatus).forEach((value) => {
//   console.log(value);
// })