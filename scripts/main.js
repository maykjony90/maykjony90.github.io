/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*
var myCalc = document.querySelector('h2'); //only effects the first h2 it finds.
var myNumber = 9 / 4;  // it works as the same way it does in Python3.5
var myTrue = true;
var myFalse = false;
var myTest = !(myTrue === myFalse);
var myFalseUse = !myTrue === myFalse;
myCalc.textContent = myFalseUse; // this is an experimental line to find out how objects work in Js
*/

/*
document.querySelector('html').onclick =  function() {
    alert('Stop poking me!');
    }
*/

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox_logo.png') {
        myImage.setAttribute('src', 'images/chrome_logo.ico');
    } else {
        myImage.setAttribute('src', 'images/firefox_logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter you name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'What\'s up, ' + myName;
}

if (!localStorage.getItem('name')) {
   setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'What\'s up' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


var myH3 = document.querySelector('h3');

myH3.onclick = function() {
    var myColor = myH3.getAttribute('style');
    if (myColor === 'color: black') {
        myH3.setAttribute('style', 'color: red');
    } else {
           myH3.setAttribute('style', 'color: black');
    } }
