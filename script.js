const time =document.getElementById("time")
const timeformat  =  document.getElementById("timeformat")

document.addEventListener('DOMContentLoaded', ()=>{
    showTime();

    setInterval(showTime, 1000);

    document.getElementById("start-btn").onclick = startFuntion;

    document.getElementById("stop-btn").onclick = stopFunction;

    document.getElementById("reset-btn").onclick = resetFunction;

        

});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let sec = date.getSeconds();
    let min = date.getMinutes();


    time.innerHTML = `${hr} : ${min} : ${sec}`;
    console.log("hours" + hr + "mins" + min + "sec" + sec );
}

let seconds = 0 ;

let timer = null;


const stopwatchDisplay = document.getElementById("stopwatch-display");



const formatTime = (totalSeconds) => {
    let hrs = Math.floor(totalSeconds/3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;





    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};



const startFuntion = () => {
    if(timer === null){
        timer = setInterval(()=>{
            seconds++ ;
        stopwatchDisplay.innerHTML = formatTime(seconds);
        }, 1000);
    }
};


const stopFunction = ()=> {
    clearInterval(timer);
    timer = null;

};



const resetFunction = () => {
    clearInterval(timer);
    timer = null ;
    seconds = 0 ;
    stopwatchDisplay.innerHTML ="00:00:00";

};

