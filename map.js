const mymap = new Map ([
    ["apples",500],
    ["Bananas",300],
    ["oranges",400]
]);
console.log(mymap);
console.log("Break");
const myMap2 = new Map();

myMap2.set('onions',200);
myMap2.set('potatoes',100);
myMap2.set('Qukambars',400);
console.log(myMap2);
console.log(myMap2.get("onions"));
myMap2.delete("Qukambars");
console.log(myMap2.has("onions"));

// typeof check and concept
console.log('Break fro typeof check');
function isArray (myarr){
    return myarr.constructor.toString().indexOf('Array') > -1;
}
console.log(isArray([1,2,3,4,5,6,7,8,9]));