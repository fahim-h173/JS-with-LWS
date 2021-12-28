const arr = ["a","b","c","d","e"];

let i = 10;

for (;  ; i--){
    if(i==0){
       break;
    }else{
        console.log(i);

    }
};
// Do not use (fon in) an Array 
// only for object

const person = {fname:"Muhammad",lname:"Fahim",age:23};
let forin="";
for (let x in person) {
   forin += person[x] + " ";
};
console.log(forin);

for (let y in arr) {
    console.log(arr[y]);
} 

// (for of) loop for array

let txt2= "";
for (let loof of arr) {
   txt2+=loof ;
};
// console.log(txt2);

const cars = ["BMW", "Volvo", "Mini"];

let text4 = "";
for (let x of cars) {
  text4 += x + "<br>";
};
console.log('Break ');
document.getElementById('demo3').innerHTML = text4;

let lang="javascript";
let text5="";
for (let z of lang) {
console.log(z);
    
};
console.log('Break');
let text6="";
let ii=10;
do {
    console.log(ii); ii++
}
while (ii<23);