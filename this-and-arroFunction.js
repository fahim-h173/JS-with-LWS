const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
 console.log(person1.fullName.call(person2));
let hello = (a,b) => a+b;
console.log(hello(3,2));

let universe= a => a ;
console.log(universe("hello"));

let longArrayFunc=(a,c) => {
  let d=a*c;
  return d;
}
console.log(longArrayFunc(12,3));