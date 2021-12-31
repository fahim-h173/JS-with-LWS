// find fahim is and it's position

let text = "Lorem ipsum dolor sit amet Fahim consectetur, adipisicing elit. Dolore, corporis quam\
voluptatem fugiat alias veniam? Fahim Dolor doloribus ducimus suscipit Fahim impedit rem,\
molestias dicta culpa est velit, Fahim deserunt, vero error ipsum.";

const matches = text.match(/fahim/gi);
const totalMatches = matches ? matches.length : 0;
console.log(totalMatches);
console.log("Break");
let person = text.search(/fahim/i);

person = person >=0 ? person : "not found"
console.log(person);

// input: (['a','b','c','d','c'],'c')
// output: find c's position 2 or not found using linearSearch();

function linearSearch(arr,val) {

    const lengths = arr.length;

    for (let i = 0; i<lengths; i++) {

        if (arr[i] === val){

            return i;
        }
    }

    return 'Not found'
}

console.log(linearSearch(['a','b','c','d','c'],'c'));


// find longest word in ana array

function longestWord(names) {
    let longWord = '';
    for ( word of names) {
        if (word.length > longWord.length) {
            
            longWord = word
        }
    }
    return [longWord, names.indexOf(longWord)]
}

console.log(longestWord(['muhammad','fahim', 'nayeem', 'junaid','Muhammad Fahim']));

// find the number which is divisible 3 and 5 or both

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if ( i % 15 === 0) {
            console.log(`${i} is FizzBuzz`);
        }else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        }else if (i % 5 === 0) {
            console.log(`${i} i Buzz`);
        }else {
            console.log(i);
        }
    }
}
fizzBuzz(100);

const mixedArray = [
    'muhammad',
    'fahim',
    false,
    'nayeem',
    undefined,
    'js',
    null,
    'learn js',
    23,
    0,
    'face',
    NaN,
    'that\'\s it',
    '',
    'Thank you'
];

const trueArray = mixedArray.filter(function(el) {
    if (el) {
        return true;
    }else{
        return false;
    }
});
console.log(trueArray);
console.log('break');

// also we can solve this problem with a simple code

const SecondTrueArray = mixedArray.filter(Boolean);

console.log(SecondTrueArray);

// remove all false values from an object

const obj = {
    a:'fahim',
    b:true,
    c:undefined,
    d:'mia',
    e:0,
    f:'learn',
    g:'',
    h:null,
    i:'that\'\s it ',
    j:NaN,
    k:false,
    l:'Thanks'
};

const trueObj = function(objFilter) {
    for (i in objFilter){
        if (!objFilter[i]) {
            delete objFilter[i];
        }
    }
    return objFilter;
};

console.log(trueObj(obj));
