const time =document.getElementById("time")
const timeformat  =  document.getElementById("timeformat")

document.addEventListener('DOMContentLoaded', ()=>{
    showTime();

    setInterval(showTime, 1000);
        

});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let sec = date.getSeconds();
    let min = date.getMinutes();


    time.innerHTML = `${hr} : ${min} : ${sec}`;
    console.log("hours" + hr + "mins" + min + "sec" + sec );
}

// let seconds = 0 ;
// setInterval(() => {
//     seconds++;
// },1000);

