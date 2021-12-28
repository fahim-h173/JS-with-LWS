let students = ["Fahim","Muhammad","Nayeem","Mizan","Zohir","Rayhan"];
let rollNumber = [2,34,15,23,13,89,3,1,4,5,6,7,8,9,10,54,324];

// console.log(students.sort());

// console.log(rollNumber.sort(function(a,b){return a-b}));

// They change our main array


// Check leap Year

function isLeapYear (year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && ( year % 1000 !== 0) )) {
        console.log(`${year} is a leap year`);
    }else {
        console.log(`${year} is not a leap year`);
    }
}

// isLeapYear(2024)

const vawels = ["a","e","i","o","u","A","E","I","O","U"];

function VawelConunt (sentence) {
    let count = 0;
    const Letter = Array.from(sentence);
    Letter.forEach(function(value){
        if (vawels.includes(value)){
            count++;
        }
    })
    return count;
};

// console.log(VawelConunt("This is my first Complex Problem In javaScrip"));

//find Dublicate value in 


const numbers = [1,3,4,5,6,3,6,4,8,3,6,9,10];

const dublicates = numbers.filter(function(value,index,array){
    return array.indexOf(value) == index
})

console.log(dublicates);