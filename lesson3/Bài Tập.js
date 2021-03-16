// let list = [ "Tuấn","Tun","Bae","Billy"]
// console.log(list)
// while (true) {
//     let ans =prompt(" Chọn (C/R/U/D/Q)")
//     if (ans == "C"){
//         let newStudent = prompt("Nhập tên của học sinh muốn thêm")
//         list.push(newStudent)
//         console.log(list)
//     }else if(ans == "Q"){
//         break
//     }else if(ans == "R"){
//         let vitri =prompt("Bạn muốn biết tên học sinh số mấy ?")
//         console.log(list[vitri])
//     }else if(ans == "U"){
//         let upvt =prompt("Nhập vị trí bạn muốn thay đổi")
//         let tenupvt=prompt("Nhập tên học sinh của vị trí thay đổi đó")
//         list[upvt]=tenupvt
//     }else if(ans == "D"){
//         let vtD=prompt("Nhập vị trí học sinh muốn xóa ")
//         list.splice(vtD)
//     }
// }


//Câu 1
//Cách 1
// let a = 1;
// let b = 2;
// console.log(a,b);
// [a,b] = [b,a];
// console.log(a,b)
// //cách 2
// let temp;
// temp = a;
// a = b;
// b = temp ;
// console.log(a,b)

// Câu 2
// const myName = 'Trần Minh Tuấn';
// console.log(myName);
// const myNameAfter = myName.split('')
// console.log(myNameAfter);

// //Câu 3
// const a = [4,5,7,-8];
// console.log(a);
// console.log(...a)


//Câu 4
// let list = ["The current items are ","1 .Jeans","2.T-Shirt","3.Socks"]
// console.log(list)
// while (true) {
//         let ans =prompt(" Chọn (C/R/U/D/)")
//         if (ans == "R"){
//             console.log(list)
//         }else if (ans == "C"){
//             let newpd=prompt("Enter the name new item")
//             list.push(newpd)
//             alert("done")
//         }else if (ans == "E"){
//             alert("This command is not supported")
//             break
//         }else if (ans == "U"){
//         let vtup=prompt("Enter the position you want to update")
//         let tenup=prompt("enter the new name")
//         list [vtup]=tenup
//         alert("done")
//         }else if (ans =="D"){
//             let vtdel=prompt("Enter the position you want to delete")
//             list.splice(vtdel)
//             alert("done")
//         }

//     }

// Câu 5
// let arr=prompt("Nhập các số cách nhau bởi dấu phẩy")
// arr=arr.split(",")
// let sum = 0
// for( i=0;i<arr.length;i++ ){
//         sum += Number(arr[i]);
//     }
//     alert(`The sum of them is ${sum}`);
    
//6
// let arr=prompt("Nhập các số cách nhau bởi dấu phẩy")
// arr=arr.split(",")
// let min = 0;
// for (i=0,i<arr.length,i++){
//     if(min>arr[i])
//     min=arr[i]
// }
// alert(min)
//7
// let num = [1, 2, 3, 4, -13];
// let input = Number(prompt("Enter a number "));
// let check = num.indexOf(input);
// if(check != -1)
// {
//     alert(`${input} is FOUND in my array at index ${check}`);
// }
// else
// {
//     alert(`${input} is NOT found in my array`);
// }

const sosheep = [5,7,300,90,24,50,75]
console.log(`Hello, my name is Tuấn and here is my sheep sizes:  `);
console.log(...sosheep)
let max=Math.max.apply(Math,sosheep);
console.log(`Now my biggest sheep has size ${max},let shave it`)
