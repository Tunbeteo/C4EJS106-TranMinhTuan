let h1 = document.getElementById('heading1')
let h2 = document.getElementById('heading2')
let header = document.getElementsByClassName('heading')
let li = document.getElementsByTagName('li')
let ul = document.getElementById('my-ul')
let myinput = document.getElementById('Myinput')
myinput.addEventListener('change',function(){
    h1.innerHTML=myinput.value
})
// for (let i of header) {
//     console.log(i)
// }
// let newLi = '<li>Hieu</li>'
// console.dir(h1);
// h1.innerHTML = `Trần Minh Tuấn`
// h2.innerHTML = 22
// h2.innerHTML += " Tuổi"
// h1.outerHTML = 'XInh'
// li[1].innerHTML= 'hanha'
// ul.innerHTML += newLi;
ul.insertAdjacentHTML('beforeend','<li>tuntun</li>') 

// li[1].remove();

// for (let item of li) {
//     item.remove
// }

/********
 * beforebegin: Trước Thẻ
 * afterbegin: Trước thẻ ở đầu
 * beforeend : trong thẻ ở cuối
 * 
 * 
//************ */



// // Tạo danh sách học sinh trong lớp
// // Thực hiện thay đổi tên của 1 học sinh bất kì bằng Dom
// let list = document.getElementsByTagName('li')
// let tencu=prompt("Nhập tên  cần thay đổi")
// let tentd=prompt("Tên học sinhthay đổi")
// for (let value of list){
//     if (value.innerHTML == tencu){
//         value.innerHTML = tentd
//     }
// }
// for (let value of list){
//     value.innerHTML
// }

// Tạo 1 nút bấm thay đổi tiêu đề
let button2 = document.getElementById('button2')
button2.addEventListener('click',changetitle)
function changetitle () {
    h1.innerHTML = 'Trần Minh Tuấn'
}


// Ấn nút update => hỏi tên người dùng đổi tên của ai 
// => đổi thành gì
let buttons = document.getElementById('button')
button.addEventListener('click',update)
function update () {
    let tenai=prompt('Đổi tên của ai')
    let tengi=prompt('đổi thành gì')
    for (let value of li){
        if(value.innerHTML == tenai){
            value.innerHTML = tengi
        }
    }
}
