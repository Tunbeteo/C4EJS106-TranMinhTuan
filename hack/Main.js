

let a=1,b=10;
let content=document.querySelector(".content");
function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let kq = TaoSoNgauNhien(a,b);

content.innerText+=`Dự đoán con số của bạn nằm trong khoảng ${a} đến ${b}`;
let valueInput=document.querySelector("#input_");
let Quay__=document.querySelector("#Quay__");
let count=3;



Quay__.onclick=()=>{
    
    console.log(valueInput.value);
    if(valueInput.value != kq){
        count--;
        content.innerText+=` -- Bạn dự đoán sai còn ${count} lần nữa`;
    }
    else{
        alert("Bạn đúng kết quả là kq");
    }
    if(count==0){
        alert("Ban đã hết lượt dự đoán")
        
    }
}

console.log(kq);