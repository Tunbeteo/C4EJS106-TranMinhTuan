let ketqua = Math.floor(Math.random() * 11);
// console.log(valueInput);
let btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    let input = document.getElementById("input_")
    let valueInput = input.value
    console.log(valueInput);
    let count = 3;
    if (valueInput == ketqua) {
        alert("Bạn đã Trúng Thưởng")
    } else {
        count--
        alert(`Bạn đã đoán sai còn${count}lần nữa`)
    } if (count == 0) {
        alert("Bạn đã hết lượt")
    }
    input.value=''
})

console.log(ketqua);