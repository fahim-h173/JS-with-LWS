const fruits=["Apple","Banana","Mango","Orange","Pineapple"];

// for(i = 0; i < fruits.length; i++) {

//     console.log(fruits[i]);
// }

function myfunc (value){
    console.log(value);
}
// fruits.forEach(myfunc);

const points = [40,100,34,2,1,53,64,99];

let sortNum = points.sort(function (a,b){
    return b-a;
});

// console.log(sortNum);
// console.log(Math.min.apply(null,points));


function myfunction (value) {
    
    return value * 2;
    
};

let mapLoop = points.map(myfunction);

// console.log(mapLoop);

function filterFunc (value,index,array) {

    return value > 50;
};

let filt = points.filter(filterFunc);

// console.log(filt);

function reduFun (total,value,index,array) {
    console.log(total);
    console.log("--------");
    return total + value;
    
};

let redu = points.reduce(reduFun,10);

// console.log(redu);

let evr = points.some(ptFunc);

function ptFunc (value,index,array) {

    return value >=100;
}
// console.log(evr);

function findFunc (value,index,array) {

    return value > 50;
};
let finds = points.find(findFunc)
console.log(finds);

const d = new Date();

// console.log(d.toISOString());


let txt = "";

let today = new Date();
let someday = new Date();

someday.setFullYear(2100,11,16);

if (someday > today) {
    text = "Today is before 2100,11,16"
}else {
    text = "Today is after 2100,11,16"
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }; // for all included
