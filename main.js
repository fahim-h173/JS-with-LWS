let x="Fahim";

console.log(typeof(x));

 

let y=10;
// y="Fahim"
console.log(typeof(y));


function personName(person,age){

    console.log("My name is " + person + " and my age is " + age + " years old");
}
personName("Fahim", 23);
personName("Nayeem",18  );


function myfunction(a,b){
    
    return a*b;
}
let z=myfunction(3,7);

console.log(z);

function temparetur_converter(farenheight){

    return (5/9) * (farenheight-32)

}

let temp = temparetur_converter(98.4);
console.log(temp);

console.log("The tempareture is " + temp + " degree Celcius");


let Car = {
    name:"Fiat",
    model:"500",
    weight:"850kg",
    color:"white",
    start: function(){
        console.log("The car has been Started.");
    },
    drive: function (){
        this.start();
        console.log("I drive the car");
    }
}
Car.start();

console.log(Car.name);
console.log(Car['color']);

console.log("inside a function test");

Car.drive();

function dates(){
    document.getElementById('event').innerHTML=Date();
}


// String Mehtods

/* slice () method */

let strr = "thsis is an example";

let slc = strr.slice(12,19);

console.log(slc);

// string replaceing method

let rep = "I love to eat kacchi";

let repw=rep.replace("kacchi","kabab");

let upper= rep.toUpperCase();
let lower= rep.toLowerCase();

console.log(lower );

// split
let spl= rep.split(" ")

console.log(spl);

// string.indexOf()

let ind="Please locate where 'locate' occurs!"

let loc=ind.indexOf("locate",15);

console.log(loc);

let lsind="Please locate where 'locate' occurs!"

let lsloc=ind.lastIndexOf("locate");

console.log(lsloc);

// Templete literals

let a1='Bangladesh';
let b2= 14;
let c3= 6;

let country=`I love ${a1} and it's populations are ${b2+c3} crore.`;

console.log(country);