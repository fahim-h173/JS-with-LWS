const x = document.forms["frm1"];
let text = "";
for (let i = 0; i <x.length; i++){
    text += x.elements[i].value + "<br>"
};
document.getElementById("test4").innerHTML = text;