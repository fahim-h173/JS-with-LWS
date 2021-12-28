// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById('demo3').innerHTML=err.message;
//   };
let x = "545";
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log( "Input is " + err)
  }
  
  function a(){
    var ke=456;
  console.log(ke);

  }
  a()

  


