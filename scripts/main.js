var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'pix/roxy_photo2.jpeg') {
        myImage.setAttribute ('src', 'pix/roxy_photo.jpeg')
    } else {
      myImage.setAttribute ('src', 'pix/roxy_photo2.jpeg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Meet Roxy Dee, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'welcome back ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}