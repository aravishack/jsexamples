//JS is light-weight, cross platform and OOP lang
//ES5->ES6/ES2015->ES7/ES2016->ES8->ES2017

var firstName;
console.log(firstName); //Undefined
firstName = "Aravind";
console.log(firstName); 

//JS have dynamic typing

firstName = true;
console.log(firstName); 

//Naming Conventions

var 3years = 3; //Error
var _3yea = 3;
var if = 2;
 

//Data Types
//Primitive == > Number, String, Boolean, Undefined->No value assigned yet and Null ->Non exsisitant

//Variable mutation and type coercion

var firstName = "John";
var age = 28;
// Type coercion - Converting one type to another, even work for boolean
console.log(firstName + " " + age);
// Variable mutation - before age was a number, now its a string
age = "twenty eight"; 

//Type of operator

var johnOlder = "Aravind";
console.log(typeof johnOlder);
var x;
console.log(typeof x); 

//Operator presedence table https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

x = 10;
console.log(x++); //10
console.log(++x); //12
 

//Ternary Operator and switch

var age = 20;
var drink = age == 20 ? "Yes" : "No"; 
 
var job = "teacher";
switch (job) {
  case "teacher":
    console.log("Here");
    break;
  case "Boss":
    console.log("Boss");
    break;
  default:
    console.log("Hey");
}
 

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is a man.');
} 

//Truthy and Falsy values and equality operators in if/else cond
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

//Functions - Expressios and statements

//Statements/declarations -> perform action but dont produce immedi results , eg:if(true){cons.log("2")}

 function abc(year, mnt) {
  console.log(arguments);
}
abc(10, 432);   //Arguments(2) [10, 432, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//Expressiom -> Always produce a result, eg:2+3
 
var abcd = function(y, m) {
  console.log(arguments);
};
abcd(1, 2); 

//Arrays -> Collen of var, even with different data types.
//Push and Unshift, Pop and Shift, length, indexOf

var k = [];
var k = new Array(); 

//Object and Props -> Key value pairs k['prop in string']

var k = {};
var k = new Object(); 

//Object and Methods

 var k = {name(){console.log("fsd")}}; 

//Loops and iteration

 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
} 
 
// Looping backwards
 for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
} 

//How JS works
//code-->Parser(for syntax check)-->JS to machine code --> Code runs

//How JS works -->https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0

//DOM --> https://javascript.info/searching-elements-dom
//Message que is there to hold all event sin JS
//HTML Collection VS Node List -->https://www.youtube.com/watch?v=ubNP6fbT2Ac
//To convvert Node List to Array, use Array.from(nl);

//Advance JS
//Everything is an object
//Primitive- Number, Boolean, String, Undefined and Null...everthing else is object
//Object prototype is place where we put props and methods, which used for inheretreance

//Function Constructo

 var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = "Smith";
var john = new Person("John", 1990, "teacher"); 

//in above code, john.calculateage will check first whehter that object have the method
//then it will check in prototpe
//then it will check in object.prototype

let a = ["1", "2"];
//this a is inherited from Array Object. That Array object have methods in prootype like pop,push
//so that we can easily access it

//Object.Create
//First create protype functions
 var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
 

//Objects Vs Primitive
// Primitives
 var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b); 
// Objects
 var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); 
//object is copied by ref .. very important point..object mutatuion

// Functions
 var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city); 

//IIFE

 (function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
//console.log(score);
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); 

//Callback
//function called when an aync oper data is ready
 function getUser(id, callback) {
  //doing sone API
  callback({ user: name });
}

getUser(1, user => {
  console.log(user.user);
});
 

//Closuse

  function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
var retirementUS = retirement(66);
retirement(66)(1990); 

//call apply and bind
 
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon'); 

//ES6 feature:

//1. Let N cosnt are block scoped and var is functional scoped
//2.String literals
 const n = "Aravi";
console.log(n.startsWith('A'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5)); 
//3.Arraow function and this-> refer to the serrounding lexial
//4. Destrtucing
//5.Spred and rest
//6.Default params
//7.Maps:
 const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!");
console.log(question.get("question"));
console.log(question.size); 
//Design patterns-->https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd

//1.Module Pattern-->we have to create new public functions just to call the private functions and variables.
 const myModule = (function() {
  const privateVariable = "Hello World";

  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();
myModule.publicMethod(); 

//2.Reaviling Module --> we map the returned object’s properties to the private functions that we want to reveal as public.
 const myRevealingModule = (function() {
  let privateVar = "Peter";
  const publicVar = "Hello World";
  function privateFunction() {
    console.log("Name: " + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  }
  function publicGetName() {
    privateFunction();
  }
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();
myRevealingModule.setName("Mark");
// prints Name: Mark
myRevealingModule.getName(); 

//3.ES6 Modules

//4.Singleton pattern-->A singleton pattern creates a new instance of a class if one doesn’t exist.
//If an instance exists, it simply returns a reference to that object.
//Any repeated calls to the constructor would always fetch the same object.

 let instance = null;
function User(name, age) {
  if(!instance) {
    instance = this;
  }
  this.name = name;
  this.age = age;
  return instance;
}
const user1 = new User('Peter', 25);
const user2 = new User('Mark', 24);
// prints true
console.log(user1 === user2);  

//5.Factory Pattern-->Factory Pattern is a pattern that uses factory methods to create objects
// without specifying the exact class or constructor function from which the object will be created.

//6.Decorator pattern-->A Decorator pattern is used to extend the functionality
//of an object without modifying the existing class or constructor function.
