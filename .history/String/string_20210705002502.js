// các cách viết string 
"hello world";
'hello wordl';
`hello world`;

// có 3 cách string theo 3 dấu ngoặc "" '' ``
// nhưng thường có 2 cách dùng là phổ biến la "" ``;
// "" thường dùng với tạo biến string bình thường không kết hợp 
// còn `` là dùng với khi muốn chuỗi kết hợp với biến khác


const string1="hello world";
let name="vinh";
name ="tiến";
const number= 5;
const string2="tên tôi là : "+ name+" và t có tuổi là: " + number;
console.log(string2);
const string3= `tên tôi la ${name}`;