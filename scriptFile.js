

const myList = ['section 1', 'section 2', 'section 3', 'section 4', 'section 5'];

var ulist = document.getElementById("navbar__list");

for (let i = 0; i < myList.length; i++) {
    var newItem = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = myList[i];
    a.id = myList[i];
    a.setAttribute('href', "#");

    newItem.appendChild(a);
    ulist.appendChild(newItem);
}
document.getElementById("section 1").href = "#part1";
document.getElementById("section 2").href = "#part2";
document.getElementById("section 3").href = "#part3";
document.getElementById("section 4").href = "#part4";
document.getElementById("section 5").href = "#part5";
const k = document.getElementById('section 1');

function myFunction() {
    const element = document.getElementById("section1");
    element.classList.add("read more");
}




function myRemove() {
    const element = document.getElementById("section3");
    element.classList.remove("para1");
}


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}