/* Given Code, don't edit */


document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const time = document.querySelector('#time').value;
function greet(timeString) {
  
  const splitTime = timeString.split(':');
  
  if (splitTime[0] < 12){
    return 'Good Morning';
  }else if (splitTime[0] >= 12 && splitTime[0] <= 17){
    return 'Good Afternoon';
  }else if (splitTime[0] > 17){
    return 'Good Evening';
  }
  
}

/* Write your implementation of displayMessage() */
function displayMessage(time){
const display = document.querySelector('#greeting');
  display.innerText = '';
  display.innerText = time;
  
}
