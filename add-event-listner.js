function my() {
    console.log("hello btn");
}
function mydiv() {
    console.log("hello div");
}
function myDiv() {
    console.log("hello div in second time");
}


document.querySelector("#textBTN").addEventListener("click",my,true);
document.querySelector("#div").addEventListener("click",mydiv,true);
document.querySelector("#div").addEventListener("mouseover",myDiv);

document.querySelector("#rmBTN").addEventListener('click',removeHover);

function removeHover () {
    document.querySelector("#div").removeEventListener("mouseover",myDiv);
}


let p1 = 5;
let p2 = 7;

function calFunction(a,b) {
    document.querySelector("#test2").innerHTML = a*b;
}
document.querySelector('#cal').addEventListener("click",function() {
    calFunction(p1,p2)
})
