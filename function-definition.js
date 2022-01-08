const x = function (a, b) {return a * b}; // function expression

// self invoking function

(function () {
    let x = "Hello!!";  // I will invoke myself
    document.getElementById('test2').innerHTML=x;
  })();

  // function perameters
  let m = {
    one: 9,
    two:5
  };
  let n = 8;
  function a(x) {
    x.one = 10;
    return x.one * x.two;
  }
console.log(a(m));

console.log(m);

const person = {
  fullName: function (city,country) {
    return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country
  }
}

const person1 = {
  firstName: 'Muhammad',
  lastName: 'Fahim'
};
const person2 = {
  firstName: 'Muhammad',
  lastName: ' Junaid'
};

console.log(person.fullName.apply(person2,['Mymensingh','Bangladesh']));

// function clousers



const add = (function () {

  let counter=0;
  return function () {
    counter+=1
    return counter
  }
  
})();


function myfunction() {
  document.getElementById('demo3').innerHTML=add();
}

// js classes

class car  {
  constructor(CarName,modelYear) {
    this.name = CarName;
    this.year = modelYear;
  }
  run(speed) {
    return this.name + ' is running in ' + speed;
  }
}

const BMW = new car ("BMW",2014);
const car2 = new car ("audi",2000);
console.log(BMW);
console.log(car2);
console.log(BMW.run("120 KM/h"));


// js classes inheritance

class cars {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
class Model extends cars {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
const car3 = new Model('Ford','mustang');
console.log(car3.show());


// getter and setter in classe

class car4 {
  constructor (brand1) {
    this.setCarname = brand1;
  }
  get getCarName() {
    return this.setCarname;
  }
  set getCarName (x) {
    return this.setCarname = x;
  }
 static hello(z) {
    return "Hello!! " + z.setCarname  }
}

const myCar = new car4 ('ford');

myCar.getCarName = "volvo";

console.log(myCar.getCarName);

console.log(car4.hello(myCar));