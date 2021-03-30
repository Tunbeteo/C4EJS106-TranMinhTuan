let bai1=document.getElementById('bai-1')
let button=bai1.getElementsByTagName("button")
let thecouter=Number(document.getElementById('counter').innerHTML)
button[0].addEventListener("click",() => {
    thecouter +=1
    document.getElementById('counter').innerHTML=thecouter
});
button[1].addEventListener("click",() => {
    thecouter -=1;
    document.getElementById('counter').innerHTML=thecouter
});


