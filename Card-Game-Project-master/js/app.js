function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
let matches =[];
const cards = document.getElementsByClassName("card");


const timer = document.getElementById("timer");
const reset = document.getElementById("restart");
let time = 0 ;
let timerId = 0;
let timerOut = true ;





//functions

//fun to open card when click on them 
function openCard (){
    this.classList.add("open");
}
// to not (matching) and (restart)
function closeCard(){
    this.classList.remove("opne");
}
//Time
//fun to start time with play the game 
function startTime (){
    if (timerOut) {
        initClock();
    }
}
const initClock= () => {
    timerOut = false ;
    timerId = setInterval(() => {
        time++;
        timerCount();
    }, 100);

    } ;
//fun to  time 
    const timerCount =() => {
        const min = Math.floor(time/60) ;
        const sec = time % 60 ;
        if (sec < 10 )  {
            timer.innerHTML = `${min}:0${sec}`;
        } else {
         timer.innerHTML = `${min}:${sec}`;
        }
    } ;

    const stopClock= () => {
        clearInterval(timerId);
    };
    // to stop time when click (restart)
     function stopTime(){
        stopClock();
        timerOut= true;
        time =0 ;
        timerCount() ;
    };

   
// event listener


for( const allelement of cards) {
    allelement.addEventListener("click" , openCard );
    allelement.addEventListener("click" , startTime);
}

reset.addEventListener("click" , stopTime);
reset.addEventListener("click" , closeCard);
