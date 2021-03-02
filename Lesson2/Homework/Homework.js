//Câu 1:
// //1.	What are var and const in JavaScript?
// (const dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.; var - tạo ra một biến có phạm vi truy cập xuyên suốt chức năng chứa nó.)
// 2.	What are the differences between let and var?
// (Let tạo ra một biến chỉ có thể truy cập được trong giá trị bao quanh nó
// còn var - tạo ra một biến có phạm vi truy cập xuyên suốt chức năng chứa nó)
// 3.	What are the differences between let and const?
// (let : thay đổi được giá trị, const không thay đổi được giá trị)
// 4.	What to use in what cases? (Mặc định dùng const,chỉ dùng let nếu thay đổi giá trị biến)

// Câu 2:
// 1. Boolean là một kiểu dữ liệu
// 2. Kết quả kiểu Boolean là một trong hai giá trị thường là "true" hoặc "false".


   console.log("bai1");
   for (let i=0;i<=7;i++){
       console.log(i);
   }
   console.log("bai2");
   let n=prompt("Nhập số cuối cùng");
   for (let i=0;i<=n;i++){
       console.log(i);
   }
   console.log("bai3");
   let n=Number(prompt("Nhập số cuối cùng"));
   for (let i=3;n>=i;i++){
       console.log(i);
   }
  let c =prompt("nhập c");
  let n =prompt('nhập n');
  for (let i=c;i<=n;i++){
     console.log(i);
  }
  let c = Number(prompt("nhập c"));
  let n = Number (prompt('nhập n'));
  for (let i=c;i<=n;i=i+3){
     console.log(i);
  }
  let c = Number(prompt("nhập c"));
  let n = Number (prompt('nhập n'));
  let s= Number(prompt("nhập S"));
  for (let i=c;i<=n;i=i+s){
     console.log(i);
  }
let n =Number(prompt("nhập N"))
var gt = 1;
for (let i=1;i<=n;i++){
    gt=gt*i;
    console.log(i);
}
alert(`The factocial of ${n}gt is ${gt}`);
 console.log("Bài 5");
 let age=Number(prompt("nhập tuổi"));
 if(age<14){
     alert("You are not enough to view this content")
 }
 else{
     alert("enjoy")
 }
console.log("bài 6")
let x=Number(prompt("Nhập X"));
if (x<5){
    alert("Lower half of 9")
}
else if(x>5){
    alert("higher half of 9")
}
console.log("bài 7");
let x=Number(prompt("NHập X"));
let n=Number(prompt("nhập N"));
if (x>n/2){
    alert(`${x}higher of half of ${n} `)
}
else if(x<n/2){
    alert(`${x}lower of half ${n}`)
}
console.log("bài 8");
let x=Number(prompt("nhập x"));
if (x%2){
    alert(`${x} is an off number`)
}
else{
    alert(`${x}in an even number`)
}
for(let i=0;i<6;i++){
    if (i<3){
        console.log("L")
    }
    else{
        console.log("h")
    }
}
console.log('bài 9b')
let n=Number(prompt("nhập N"))
for (let i=0;i<n;i++)
if (i<n/2){
    console.log("L")
    }
    else if (i>n/2){
        console.log("H")
    }
console.log("bài 9c")
for(let i = 0; i < 8; i++)
{
    if(i % 2 == 0)
    {
        console.log("0");
    }
    else
    {
        console.log("1");
    }
}
let n = new type(arguments); = Number(prompt("Nhập n: "))
for(let i = 0; i < n; i++)
{
    if(i % 2 == 0)
    {
        console.log("0");
    }
    else
    {
        console.log("1");
    }
}
let height=Number(prompt("nhập chiều cao Cm"));
let weight=Number(prompt("nhập cân nặng"));
var BMI =(weight/Math.pow(height/100,2));
if (BMI<16){
    alert("Severely underweight");
}
else if(16 <= BMI <= 18.5)
{
    alert("You are underweight");
}
else if(18.5 <= BMI <=25)
{
    alert("You are normal");
}
else if(25 <= BMI <=30)
{
    alert("You are overweight");
}
else
{
    alert("You are obese");
}