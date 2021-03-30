// // Tìm hiếu API
// // // Đây là 1 Array Object

// const DATA = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
// console.log(DATA);

getDATA()
async function getDATA() {
    const DATA = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    let data = await DATA.json();
    console.log(data);
}

// get Lấy
// post Đẩy lên
// put data Sửa 
// delete Xóa
 
// IN Ra list email của người dùng trong data 
// khi click vào email => in ra màn hình tất cả thông tin tương ứng của người đó bao gồm họ tên và ảnh
