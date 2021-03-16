// // Biến trung gian
// let a = 5
// let b = 6
// console.log(a,b)
// let shipper = 0 // đây là tạo biến trung gian
// shipper = a
// a=b 
// b = shipper
// console.log(a,b)



// DeStructing 
// let a = 5;
// let b = 6;
// console.log(a,b);
// [a,b]=[b,a];
// console.log(a,b);

// Bit (^) a+b=>a^b

// let message = "Trần Minh Tuấn";
// let arrMessage = [message]; // hoặc dùng Array[message]
// // console.log(arrMessage);

// let message = "Trần, Minh, Tuấn";
// let arrMessage = message.split(",")
// //Array(message)
// console.log(arrMessage)

// let tennguoicantim=prompt("Nhập Tên Người Cần Tìm")
// let nguoicantim=prompt("nhập tên người muốn tìm")
// let arrdsNCT = tennguoicantim.split("  ")
// let timthaykhong = arrdsNCT.indexOf(nguoicantim)
// // -1 => khong tim thay
// // 1 => tim thay 
// if(timthaykhong == -1){
//     console.log("không tìm thấy")
// }else{
//         console.log(`Người cần tìm là ${nguoicantim}`)
// }

// let canNang = prompt ("Nhập Cân Nặng")
// let arrCanNang = canNang.split(" ")
// let min=parseInt(arrCanNang[0]);
// for (let i = 0 ; i<arrCanNang.length;i++){
// if(min>parseInt(arrCanNang[i])){
//     min=parseInt(arrCanNang[i])
// }
// }
// console.log(min)
let num = [2,10,3,11,17,22,33]
let isNguyenTo=true
for (let i= 2 ;i<7;i++){
    if(7 % i == 0){
        isNguyenTo=true
        break
    }
}
if(isNguyenTo){
    console.log("Đây là số nguyên tố");


}