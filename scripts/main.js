var myImage = document.querySelector('.nissan-images');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nissan-skyline.jpg') {
        myImage.setAttribute ('src', 'images/nissan-skyline-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/nissan-skyline.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'JDM is great, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'JDM is great, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}