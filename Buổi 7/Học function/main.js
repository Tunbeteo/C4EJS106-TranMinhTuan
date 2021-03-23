// console.log("hi em");
// doi()
// console.log("ăn cơm chưa");
// hetdoi()

// function doi(){
//     // block các khối lệnh
//     console.log("Tao Đang Dỗi");

// }
// function hetdoi(){
//     console.log("Hết Dỗi");
// }


// function hello(){
//     for(i=0;i<3;i++){
//         console.log(`${i}hello world`)
//     }
// }
// hello()

// function hello(name,age){
//     console.log('Hello',name,age)
// }
// hello()
// let total=(sum(1,2,3))
// function sum(...others){
// console.log(others)
// let total=0
// for(let item of others){
//     total += item
// }
// return total
// }




// function tuoi (Ten,Age,Loi){
//     console.log(`${Ten},${Age}Tuoi,${Loi}`)
// }
// tuoi("Lê Văn Đạt",8,"Xin Chào bé ")




// Viết hàm tính trung bình cộng điểm của học sinh
// từ đó ra alert ra màn hình học lực của học sinh đó


function diemtb(...others){
    let tong = 0;
    for (let i of others){
    tong+=i
}
let dtb = tong/others.length;
console.log(tong)
if(dtb>=9){
    alert(`Điểm trung bình:${dtb} => điểm giỏi`)
}
else if(dtb>=7 && dtb<9){
    alert(`Điểm trung bình:${dtb} => điểm khá`)
}
else if(dtb>=5 && dtb<7){
    alert(`Điểm trung bình:${dtb} => điểm trung bình`)
}
else{
    alert(`Điểm trung bình:${dtb} => điểm yếu`)
}
}
diemtb(8,6,9,7)


function pt(a,b,c) {
    let x;
    if( a == 0 ){
        x = -c / b;
        console.log(`Pt có nghiệm là: x = ${x}`);
    } else {
        let denta = (b * b) - (4*a*c);
        if( denta == 0){
            x = -b / (2*a)
            console.log(`Pt có nghiệm kép là: x1 = x2 = ${x}`);
        }else if( denta > 0 ){
            let x2 = (-b + Math.sqrt(denta)) / (2*a);
            x = (-b - Math.sqrt(denta)) / (2*a);
            console.log(`Pt có 2 nghiệm phân biệt là:
            \nx1 = ${x}
            \nx2 = ${x2}`);
        }else {
            console.log('vô nghiệm !');
        }
    }
}
pt(3,2,5);
pt(2,-7,3);