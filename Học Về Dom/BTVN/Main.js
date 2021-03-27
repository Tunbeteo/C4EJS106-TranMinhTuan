let container = document.getElementById('list')
for (let i = 0; i <3;i++) {
    container.insertAdjacentHTML('afterend',`<li>${i}<`)
}
// Bài 1 
// 1.D
// 2.b
// 3.C
// 4.A

// Bài 2 
let a=setInterval(function(){
    console.log('Xin Chào');
},100)

// Bài 3
// Biến Var Và Let nếu ở trong hàm thì bên ngoài không chạy được


// Bài 4 
let li = document.getElementsById('Li');
console.log(li[0]);
for(let value of li){
    console.log(value);
}

// Bài 5
let div = document.getElementsByClassName('singer')
console.log(div[1]);
for(let value of div){
    console.log(value);
}
// bài 6
singer[1].remove

// bài 7 xxxxxx


// Bài 8
function wish(){
    let name='Tuấn';
    let wish='Rich'
    alert(`Name: ${name} Wish to do this year:${wish}`);
}
wish();

// Bài 9
function wishTDo(name,wish){
    alert(`Name: ${name} Wish to do this year:${wish}`);
}

wishTDo('Tuấn','Rich');
