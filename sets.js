const mySets = new Set (["Muhammad","Fahim",23]);

const letters = new Set ();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

const lettersCapital = new Set ();

const a="A";
const b="B";
const c="C";
const d="D";
lettersCapital.add(a);
lettersCapital.add(b);
lettersCapital.add(c);
lettersCapital.add(d);
console.log(lettersCapital);

console.log("Break");
lettersCapital.forEach(myfunction)
function myfunction (z){
    console.log(`The letter is ${z}`);
}

console.log("Break for for loop");
for (let x of lettersCapital.values()){
    console.log(x);
};