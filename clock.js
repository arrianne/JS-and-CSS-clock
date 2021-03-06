

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');



function setDate() {
  const now = new Date();
console.log(now.getHours() > 18);


  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

// changing the background class depending on time of day

  if (now.getHours() < 17) {
    document.body.classList.add("day");
  } else {
    document.body.classList.add("night");
  }

// https://medium.com/@mike_ekkel/javascript-30-day-2-css-js-clock-ae539f10a9f9

  if(secondsDegrees === 90) {
      allHands.forEach(hand => hand.style.transition = 'none')
  } else {
      allHands.forEach(hand => hand.style.transition = '')
  }
}


setInterval(setDate, 1000);
setDate();

//For every second the secondHand moves I would like the background color to change by only one shade.

// document.body.style.backgroundColor = "#AAAAAA";
//
//
// var colors = ["blue", "yellow", "red", "green", "orange"]
// var currentColor = 0
// var lis = document.querySelectorAll("body")
// function changeColor() {
//   --currentColor
//   if (currentColor < 0) currentColor = colors.length -1
//   for (var i = 0; i < lis.length; i++) {
//     lis[i].style.color = colors[(currentColor +i) % colors.length]
//   }
// }
// setInterval(changeColor, 1000);
//
//
//
// var div = document.getElementById("html");
//
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
//
// function changeColor(){
//   div.style.backgroundColor= getRandomColor();
// }
//
// setInterval(changeColor,1000);
