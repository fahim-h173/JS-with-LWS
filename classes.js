class car {
    constructor (name,year){
        this.name=name;
        this.year=year;
    }
    play(status){
        console.log(`${this.name} age is ${this.year} is playing ${status}`);
    }
};

const car1 = new car ("toyota",2018);
const car2 = new car ("volvo",2019);
const car3 = new car ("saab",2020);


const person1 = new car ("Sakib",35);
const person2 = new car ("Tamim");

console.log(person1);
console.log(car1);

// also we can pass perameter with class method
person2.play("well");
person1.play("bad");