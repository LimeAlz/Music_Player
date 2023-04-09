const album = []

const one = new Audio("Album/one.mp3");
const two = new Audio("Album/two.mp3");
const three = new Audio("Album/three.mp3");
const four = new Audio("Album/four.mp3");
const five = new Audio("Album/five.mp3");
const six = new Audio("Album/six.mp3");
const seven = new Audio("Album/seven.mp3");
const eight = new Audio("Album/eight.mp3");
const nine = new Audio("Album/nine.mp3");

album.push(one);
album.push(two);
album.push(three);
album.push(four);
album.push(five);
album.push(six);
album.push(seven);
album.push(eight);
album.push(nine);

let index = 0;
let audioElement = album[index];

function highlightTrack(index) {
    const rows = document.querySelectorAll("tr");
    rows.forEach((row, i) => {
      if (i === 0) return; // skip the header row
      if (i === index + 1) {
        row.classList.add("playing");
      } else {
        row.classList.remove("playing");
      }
    });
  }


const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

play.addEventListener("click",()=>{
    audioElement.play();
    highlightTrack(index);
})
pause.addEventListener("click",()=>{
    audioElement.pause();
})
next.addEventListener("click",()=>{
    audioElement.pause();
    audioElement.currentTime = 0;
    index = (index+1)% album.length;
    audioElement = album[index];
    audioElement.play();
    highlightTrack(index);
})


prev.addEventListener("click",()=>{
    audioElement.pause();
    audioElement.currentTime = 0;
    index = index-1;
    if(index<0){
        index = album.length - 1;
        console.log(index)
    }
    audioElement = album[index];
    audioElement.play();
    highlightTrack(index);
})