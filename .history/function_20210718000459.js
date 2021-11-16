// bài 1 cách tạo function
// vd
function tinhTong(a, b)
{
    return a+b;
}
// tinhTong();//đây là cách để hàm chạy
// hoặc viết như này 
function tinhTong(a, b)
{
    return a+b;
}()
console.log(tinhTong(80,90));
// bài 2 cách gắn function vào 1 biến
// chúng ta thường gọi tinhtong() là để cho hàm chạy
// bây h chúng ta sẽ có gán biến là 1 function
 let tinh =tinhTong;
 console.log(tinh(120,300));
//  bài tập làm 1 bài tập về tính trung bình hai số sử dụng 2 cách đã học
function TBC(a,b,fr){
    const tong=tinh(300,500);
    return tong/2;
}
let tbc=TBC();
console.log(tbc);
//chú ý tất cả các cách function ở trên đều bị hoisting nhưng có cách mà không bị hoising
// cách tạo function không bị hoisting
// console.log(`cach gọi function mà không bị hoisting: ${hieu(60,50)}`);
let hieu=function(a,b){
    return a-b;
}
console.log(`cach gọi function mà không bị hoisting: ${hieu(60,50)}`);
