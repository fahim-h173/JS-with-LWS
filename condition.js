let age = 33;

if (age<18) {
    console.log("You are too young!");
}else if(age==18){
    console.log("You are enough adult!");
}else if(age>18 && age<30){
    console.log("Welcome!");
}
else if (age>32){
    console.log("You are too old!");
}
else{
    console.log("Sorry! You could't join the club.");
}

let day;

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
        day = "incurrect day selection"
  }
  
console.log(day);

let d;
switch (new Date().getDay()) {
  case 0:
    d = "Sunday";
    break;
  case 1:
    d = "Monday";
    break;
  case 2:
    d = "Tuesday";
    break;
  case 3:
    d = "Wednesday";
    break;
  case 4:
    d = "Thursday";
    break;
  case 5:
    d = "Friday";
  case 6:
    d = "Sunday";
}

document.getElementById('demo2').innerHTML = `Today is ${d}`;

let text;

switch (new Date().getDay()) {
  case 0:
  case 6:
    text = "it's Weekend";
    break;
  case 4:
  case 5:
    text = "Soon it's weekend";
      break;
    default:
      text = "Looking forward to the weekend"
}

document.getElementById('demo3').innerHTML= text;