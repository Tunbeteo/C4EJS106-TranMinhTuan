// // let huanRose = {
// //     name : 'Huấn Rô xì',
// //     address: 'Yên bái',
// //     age: 48,
// //     isMarried : true,
// //     favorites : [ "ối","dồi","ôi"],
// //     wife : {
// //         name : "ai đó",
// //         age : 30
// //     },

// //     earnMoney : function () {
// //     console.log("Chỉ có làm thì mới có ăn");
// // }
// // };
// // // thêm thuộc tính cho 1 Object
// // huanRose["weight"] = 60;
// // huanRose.height =  180;
// // huanRose.children = [
// //     {name:"child 1", age:10},
// //     {name:"child 2",age:12},

// // ];
// // // sửa giá trị thuộc tính
// // huanRose.name = "huan rose";
// // huanRose.age = 50;
// // // xóa 1 thuộc tính 
// // delete huanRose.favorites;
// // delete huanRose.address;
// // console.log(huanRose);
// //  // duyệt object : bao nhiêu thuộc tính ( giống duyệt mảng)
// //  for(let key in huanRose)[
// //      console.log("key"+ key+":"+huanRose[key])
// //  ]



// //  // tạo 1 object là người yêu của các bạn gồm các thuộc tính : 
// // //  name,
// // //  age
// // //  ,address
// // // //  ,weight,
// // // //  height
// // let ny = {
// //     name : 'A',
// //     address : 'hà nội',
// //     age : 23,
// //     weight : 55,
// //     height : 170,
// //     favorites : ["không","có"],
// //     borther : {
// //         name:"b",
// //         age : 19

// //     }
// // }
// // console.log(ny)



// // let data = [
// //     {id:1,name:'Loan',age:20,address:'HN'},
// //     {id:2,name:'linh',age:20,address:'HN'},
// //     {id:3,name:'liên',age:21,address:'TH'},
// //     {id:4,name:'hồng',age:21,address:'BG'},
// // ];
// // for( let person of data){

// // if (person.id == 3){
// //     console.log(person)
// // }
// // }


// // for (let person of data){
// //     if (person.age == 20){
// //         console.log(person.name)
// //         break;
// //     }
// // }

// // for(let person of data)
// // if (person.age > 20 ) {
// //     console.log(person.address)
// // }
// // // ... bài nay có 2 cách
// // for (let obj of data){
// //     if(obj.name.startsWith('L',0)){
// // console.log(obj.age)
// //     }
// // }
// // for (let person of data){
// //     if(person.name[0]=="L" || person.name[0]=="l"){
// //         console.log(person.age)
// //     }
// // }



// let films = [
//     {
//         id: 1,
//         name: 'Film 1',
//         year: 2020,
//         actors: [
//             'Actor 1',
//             'Actor 2',
//             'Actor 3'
//         ]
//     },

//     {
//         id: 2,
//         name: 'Film 2',
//         year: 2019,
//         actors: [
//             'Actor 2',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 3,
//         name: 'Film 3',
//         year: 2021,
//         actors: [
//             'Actor 1',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 4,
//         name: 'Film 4',
//         year: 2021,
//         actors: [
//             'Actor 2',
//             'Actor 1',
//             'Actor 5'
//         ]
//     }
// ];
// // Tìm tên của các film sản suất năm 2020
// // Nhập vào tên 1 diễn viên bất kì , tìm các film có diễn diên đó tham gia 
// // Sắp xếp danh sách film theo thứ tự năm sản xuất
// for (let value of films) {
//     if (value.year == 2020) {
//         console.log(value)
//     }
// }
// let name = prompt("nhập tên diễn viên")
// for (let film of films) {
//     let check = false;
//     for (let actor of film.actors) {
//         if (film.actors == name) { check = true; }
//     }
//     if (check == true) {
//         console.log(film)
//     }
// }

// 
let nums = [9,1,23,4,3,5,6,7];
// bubble sort 
// merge sort 
for (let i=0;i<nums.length;i++){
    for(let j = 0;j<=nums.length ; j++){
        if (nums[i]<nums[j]){
            let tmp = nums[i];
            nums[i]=nums[j];
            nums[j]=tmp;
        }
    }
}
console.log(nums)