// bài 1 cách tạo function
// vd
function tinhTong(a, b)
{
    return a+b;
}
// tinhTong();//đây là cách để hàm chạy
console.log(tinhTong(80,90));
// bài 2 cách gắn function vào 1 biến
// chúng ta thường gọi tinhtong() là để cho hàm chạy
// bây h chúng ta sẽ có gán biến là 1 function
 let tinh =tinhTong;
 console.log(tinh(120,300))