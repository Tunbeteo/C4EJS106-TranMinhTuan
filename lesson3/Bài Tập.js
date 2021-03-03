let list = [ "Tuấn","Tun","Bae","Billy"]
console.log(list)
while (true) {
    let ans =prompt(" Chọn (C/R/U/D/Q)")
    if (ans == "C"){
        let newStudent = prompt("Nhập tên của học sinh muốn thêm")
        list.push(newStudent)
        console.log(list)
    }else if(ans == "Q"){
        break
    }else if(ans == "R"){
        let vitri =prompt("Bạn muốn biết tên học sinh số mấy ?")
        console.log(list[vitri])
    }else if(ans == "U"){
        let upvt =prompt("Nhập vị trí bạn muốn thay đổi")
        let tenupvt=prompt("Nhập tên học sinh của vị trí thay đổi đó")
        list[upvt]=tenupvt
    }else if(ans == "D"){
        let vtD=prompt("Nhập vị trí học sinh muốn xóa ")
        list.splice(vtD)
    }
}
