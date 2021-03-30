let hto=document.querySelector('h1')
let hnho=document.querySelector('h2')
async function getDATA() {
    const DATA = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')
    let data = await DATA.json();
    let numberrandom=Math.floor(Math.random() * (data.length));  
    // console.log(data[numberrandom]);
    hto.innerHTML=data[numberrandom].quoteText
    hnho.innerHTML=data[numberrandom].quoteAuthor
}
getDATA()
let reload=document.getElementById("reload-btn")
reload.addEventListener("click",getDATA)