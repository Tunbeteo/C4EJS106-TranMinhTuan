// // Bài 3
let ketqua = Math.floor(Math.random() * 11);
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
// // Bài 1
//  function findOpposite(n,inputnum){
//      let temp=n/2
//      let result;
//      if (inputnum<temp){
//      result=inputnum+temp
//      }else{
//          result=inputnum-temp
//      }
//      return result
//  }
// console.log(findOpposite(10,2))
// console.log(findOpposite(10,6))

// // Bài 2
// let string1="abc"
// let string2="1234";

// let arr1=string1.split("");
// let arr2=string2.split("");

// let arr1_length=arr1.length;;
// let arr2_length=arr2.length;

// let arr_final=[];
// if(arr1_length<=arr2_length){
//     for(let i=0;i<arr2_length;i++){
//         if(i<arr1_length){
//             arr_final.push(arr1[i]);
//             arr_final.push(arr2[i]);
//         }
//         else{
//             arr_final.push(arr2[i]);
//         }
//     }
// }
// else{
//     for(let i=0;i<arr1_length;i++){
//         if(i<arr2_length){
//             arr_final.push(arr1[i]);
//             arr_final.push(arr2[i]);
//         }
//         else{
//             arr_final.push(arr1[i]);
//         }
//     }
// }
// console.log(arr_final.join(' ') )