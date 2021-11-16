// các cách viết string 
"hello world";
'hello wordl';
`hello world`;

// có 3 cách string theo 3 dấu ngoặc "" '' ``
// nhưng thường có 2 cách dùng là phổ biến la "" ``;
// "" thường dùng với tạo biến string bình thường không kết hợp 
// còn `` là dùng với khi muốn chuỗi kết hợp với biến khác


// const string1="hello world";
// let name="vinh";
// name ="tiến";
// const number= 5;
// const string2="tên tôi là : "+ name+" và t có tuổi là: " + number;
// console.log(string2);
// const string3= `tên tôi là ${name}`;
// console.log(string3);
// name.length();
// const name1="lương";
// name1.length();


let name1="I am front end developer";
let name2=`ten toi la: vinh va t la ${name1}`;
console.log(name2);

// split là dùng để tách 
// vd
console.log(name2.split(""))//cách các chữ cái thì trong dấu ngoặc "" không viết gì cả
//vd 2 là cách những nơi mình muốn vd muốn các chữ thông qua khoảng trắng thì dùng " "
console.log(name2.split(""));
//nói chung muốn tách chữ thông qua cái gì thì viết vào trong ngoặc
//còn nếu điền ký tự không có trong string vào split thì nó sẽ in ra 1 mảng chuỗi đó 
nam
