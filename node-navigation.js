const p = document.getElementById('text');

const way1 = p.innerHTML;

const way2 = p.firstChild.nodeValue;

const way3 = p.childNodes[0].nodeValue;

console.log(way2);


const para = document.createElement("p");
const node = document.createTextNode("Hello! This is a Text Node!");

para.appendChild(node);

const element = document.getElementById('div');

const child = element.firstChild;

element.insertBefore(para, child);
const removeElement = element.childNodes[2]
element.removeChild(removeElement);

const lastChild = element.lastChild;

element.replaceChild(para, lastChild)

const htmlCollection = document.getElementsByTagName('p');
const htmlNodes = document.querySelectorAll('.node');

console.log(htmlCollection);

console.log(htmlNodes);

function myFunction() {
    const myCollection = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "red";
    }
  }

  document.addEventListener('click',myFunction)