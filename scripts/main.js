let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_2119.JPG') { 
      myImage.setAttribute('src','images/Alt.jpg');
    } else {
      myImage.setAttribute('src','images/IMG_2119.JPG');
    }
}
let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    function setUserName() {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
      }
      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }
      myButton.onclick = function() {
        setUserName();
      }
      function setUserName() {
        let myName = prompt('Please enter your name.');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.innerHTML = 'Mozilla is cool, ' + myName;
        }
    }