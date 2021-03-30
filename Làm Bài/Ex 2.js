let startbt=document.getElementById('start')
let stopbt=document.getElementById('stop')
let numberdisplay=document.getElementById('numberdisplay')
let numberinput=document.getElementById('number-input')

let time
function count(){
    let number=numberinput.value
    numberdisplay.innerHTML=number
    time=setInterval(function(){
        numberdisplay.innerHTML=number--
    },1000)
}
startbt.addEventListener('click',count)
function stop(){
    clearInterval(time)
}
stopbt.addEventListener('click',stop)