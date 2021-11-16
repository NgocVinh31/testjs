// bài 1 Nhập tuổi và kiếm tra nếu >=18 cho vào rạp phim 
// bài 1
// const yourAge =prompt("nhập tuổi của bạn","18");
// let message ="bạn không đủ tuổi vào rạp";
// if(Number(yourAge)>=18)
// {
//     message="Mời bạn vào xem phim";
// }
// alert(message);
//bài 2 nhập 2 số a và b và kiếm tra 2 số lớn hơn hay nhỏ hơn
const a= Number(prompt("nhập số a"));
const b= Number(prompt("nhập số b"));
let message="hai số bằng nhau";
if(a>b)
{
    message="a > b";
}
else if(a<b)
{
    message="a < b";
}