// object properties and method expailed with example

const objMethod = {
  firstName: "Muhammad",
  lastName: "fahim",
  age: 23,
  eyeColor: "brown",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  person2: {
    fname: "junaid",
    lname: "ahmad",
    age: 25,
  },
};
console.log(objMethod.fullName());
objMethod.person2.age = 9;

let text = "";

for (let x in objMethod) {
  text += objMethod[x] + " ";
}

console.log(objMethod.person2);
console.log("break");
let text2 = "";
for (let y in objMethod.person2) {
  text2 += objMethod.person2[y] + " ";
}
console.log(text2);

document.getElementById("test").innerHTML =
  objMethod.person2.fname +
  " " +
  objMethod.person2.lname +
  " is " +
  objMethod.person2.age +
  " years old.";

document.getElementById("test2").innerHTML = text2;

let myArray = Object.values(objMethod);
document.getElementById("test3").innerHTML = myArray;
console.log(Object.values(objMethod));

var person = {
  name: "Fahim",
  today: new Date(),
};

document.getElementById("test4").innerHTML = JSON.stringify(person);

/// object Accessors (Getter and setter)
const person3 = {
  fname: 'Muhammad',
  lname: 'fahim',
  age: 23,
  language:'',
  get names() {
    return this.fname + ' ' + this.lname;
  },
  set lan(langu) {
    this.language = langu.toUpperCase();
  }
}
person3.lan="bn";
console.log(person3);

const person5 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

Object.defineProperty(person5,'fullName', {
  get : function () {
   return this.firstName + ' ' + this.lastName;
  }
})
// Set an object property using a setter:
person5.lang = "en";

console.log('break');
console.log(person5.fullName);

// Object Constractor

function readyMadeObject(first,last,age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  }
  
}

const fahim = new readyMadeObject ('Muhammad','fahim',25);
const nayeem = new readyMadeObject ('Muhammad','nayeem',25);
const junaid = new readyMadeObject ('Muhammad','junaid',25);

const aName = new readyMadeObject ('called a name');

readyMadeObject.prototype.realName = 'Muhammad Fahim';

console.log(junaid.realName);

const arr = [1,2,3,4,];

for (let i=0;i<arr.length;i++) {
  console.log(arr[i]);
}

// controle loop in my own way

console.dir(arr)
console.dir(fahim)
console.log('break');

let arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

const mynumber = {};

// make it iterable

mynumber[Symbol.iterator] = function () {
  let n = 0;
  let done = false;

  return {
    next () {
      n += 10;
      if (n ==100) {done = true}
      return {
        value: n,
        done:done
      }
    }
  }

}

for ( let num of mynumber) {
  console.log(num);
}


// sets in Object

const mySets = new Set (['a','b','c','d','e']);

console.log(mySets);
mySets.add('f');
console.log(mySets);

console.log('break');

// mySets.forEach(function(value){
//   console.log(value);
// });

let setIterator = mySets.values();

console.log(mySets.keys());

console.log('break');

// for ( let s of mySets) {
//   console.log(s);
// }

let entIterator = mySets.entries();

for (let ent of entIterator) {
  console.log(ent);
}

// Maps in Object

const fruits = new Map ([
  ["apples",500],
  ["bananas",300],
  ["oranges",200]
]);
fruits.set("pineapples",150)
fruits.delete("apples")

console.log(fruits.has("oranges"));

let mapLoop = '';

fruits.forEach(function(value,key){

  mapLoop += key + ' = ' + value + '<br>';
});
document.getElementById('test3').innerHTML = mapLoop;

let enLoopText = '';
for ( let enMap of fruits.entries()) {
    enLoopText += enMap + '<br>';
};
document.getElementById('test4').innerHTML = enLoopText;