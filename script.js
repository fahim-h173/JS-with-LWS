function myFunction(){
    const Decorate = document.querySelector('#demo');

    Decorate.style.color = "tomato";

    Decorate.style.fontSize = "58px";
    Decorate.style.fontFamily = "Nada";
}

// document.querySelector('#textBTN').addEventListener("click",myFunction);


function myText(){

    
    document.querySelector('#heading').innerHTML = "Hello Javascript";
}

document.querySelector('#heading').addEventListener("click",myText);

function changeText(id) {
    
    id.innerHTML = 'Ooops!';
}

function load() {
    const text = document.querySelector("#pTag");
    text.innerHTML = 'document loaded'
}

function mOver(obj){
    obj.innerHTML = 'Mouse Over me';
}

function mOut(obj){
    obj.innerHTML = 'Thank you';
}
