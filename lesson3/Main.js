

// // Array => Mảng, Danh sách
let movies = ["Himan","Tun","Nice"]
// // console.log(movies)
// // // create 
// movies.push ("hi tun")
// console.log(movies)
// movies.unshift("ninh dương lan ngọc")
// console.log(movies)

// //
// Tạo ra 1 danh sách các bạn trong lớp 
// Hỏi người dùng có muốn thêm thành viên mới không 
// nếu có : thêm thanh viên mới vào cuối danh sách
// nếu không : in ra danh sách lớp và thoát chương trình
// let arr = ["Tuấn","Hải","Bách","Long"]
// while (true){
//     let ans =prompt("Có thêm không ? (Y/N")
//     if (ans == "Y"){
//     let newStudent = prompt("Tên của học sinh")
//     arr.push(newStudent)
//     }else{
//     console.log(arr)
//     break
// }
// }




// Read
// console.log(movies[0])
// let len = (movies.length)
// console.log(movies[len-1])
//for in ra các phần tử trong mảng
// 1
// for (i=0;i<movies.length;i++){
//     console.log(movies[i])
// // }
// 2
// for (let movie of movies){
//     console.log(movie)
// }
// 3 ra số 
// for (let movie in movies){
//     console.log(movie)
// }

//update
// 1 Thay đổi biến
// let randoVar = 0
// randoVar = 2
// 2 cập nhật 
// movies[0]=wonderwowen
// //movies[3]=hahah
// movies[movies.length -1]= "Thủy Tinh"

// //dellte 
// // movies.splice(0)
// movies.splice(movies.length -1)
// // movies.splice(1,movies.length -1)
// console.log(movies)


// bài tập

// //
// Tạo một danh sách các bạn trong lớp
// Hỏi người dùng muốn thao tác (C,R,U,D)
// Nếu người dùng chọn "C" => Hỏi thêm học sinh nào => thêm vào danh sách
// Nếu người dùng chọn "R" => Hỏi muốn xem học sinh ở vị trí bao nhiêu 
//                         => alert tên của học sinh ở vị trí đó
// Nếu người dùng chọn "U" => Hỏi xem muốn update ở vị trí bao nhiêu
//                         => Thay đôi học sinh ở vị trí tương ứng
// Nếu người dùng chọn "D" => Hỏi xem muốn xóa học sinh ở vị trí bao nhiêu
//                         => Xóa học sinh ở vị trí tương ứng
// Nếu người dùng chọn "Q" => Thoát chương trình và in ra danh sách lớp
// //

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
