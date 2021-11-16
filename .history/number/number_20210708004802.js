// có 2 loại kiểu số là số nguyên và số thực 
// số nguyên là các số 1 3 5
// còn số thực là các số 1.2 1.5 6.5
//vd 
let number1 = 5;
console.log(number1);
// Đổi từ string sang number 
let number2="5";
let number3="6.4";
console.log(`cách đổi số nguyên ${parseInt(number2)}`);//cách đổi biến thành số nguyên
console.log(`cach đổi sang số thực:${parseFloat(number3)}`); //cách đổi sang số thực
// cách đổi số âm sang số dương
// trong toán đổi số âm thành số dương là phải dùng dấu giá trị tuyện đối
let number4=-9; 
console.log(`cach doi so am sang so duong ${Math.abs(number4)}`);
// các cách làm tròn các số 
// có 3 cách làm tròn là làm tròn lên và xuống và gần nhất
let number5 =4.3;
console.log(`lam tron len ${Math.ceil(number5)}`);
console.log(`lam tron xuống ${Math.floor(number5)}`);
console.log()
