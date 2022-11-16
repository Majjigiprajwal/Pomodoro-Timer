// let count=0;

// const myInterval = setInterval(() => {
//     console.log('prajwal G Majjigi');
//     count++;
//     if(count===10){
//         stopInterval();
//     }
// },1000);


// const stopInterval = function(){
//     clearInterval(myInterval);
// }


let minutes=25;
let seconds=0;

function start(){
    interval = setInterval(() => {
        if(seconds==0){
            seconds=59;
            minutes--;
        }
        seconds--;
        if(minutes==0 && seconds==0){
            stop();
            alert("Time's up ");
        }
        displayTime(minutes,seconds);
    },1000);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    document.getElementById('timer').innerHTML='25:00';
    stop();
    minutes=25;
    seconds=00;
    displayTime(minutes,seconds)
}

function displayTime(minutes,seconds){
    
    document.getElementById("timer").innerHTML= `${minutes}:${seconds}`;
}
