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
console.log(`cach làm tròn gần nhất ${Math.round(number5)}`);


// vd về chia mà ra kết quả như 0.3333333 như này thì rất dài ta chỉ muốn in mỗi 0.33 thôi
// thì ta dùng hàm toFixed nhưng sau khi dùng nó sẽ biến thành string muốn đổi thành số ta lại dùng 2 cách đầu tiên bài học 
console.log(parseFloat((1/3).toFixed(2)));
//Math.random()//là trả về 1 số ngẫu nhiên từ 0 đến 1 nhưng không bằng 1 
console.log(Math.random())
