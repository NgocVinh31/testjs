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
// cách gọi hiển chạy luôn mà không cần gọi
//vd
(function hieu(){
    console.log("cách gọi hàm chạy luôn");
})();
// chú ý là phải cho phần code hàm vào ngoặc rồi thêm () vào cuối là chạy được hàm
// có 3 phần chú ý trong function là global scope và block scope và closure
// global scope là ám chỉ những cái được tạo ở ngoài function và ta có thể truy xuất nó mọi nơi
// còn block scope là ám chỉ những cái tạo trong function và t không thể sử dụng những cái được tạo trong function ơ ngoài function được 
// còn closure là hiểu đơn giản là  function con được phép sử dụng những thứ có trong function cha 
//vd
 function sayname(){
     let name="vinh";
     function sayhi(){
         console.log(name);
     }
     return sayhi;//cái này là trả về 
 }
 //ở đây ta hiểu là hàm sayhi là hàm con còn hàm sayname là hàm cha và hàm con sayhi sẽ được phép sử dụng biến name vào trong hàm mình => đó là closure hàm con được phép lấy mọi thứ trong hàm cha
let say=sayname();
say();

// còn cái hay ở closure là khi ta gọi hàm thì chạy đến return là ta hết truy xuất được hàm đó nhưng closure lại cho phép truy xuất được thứ trong hàm 
vd như câu trên khi hàm sayname chạy đến return là hàm hết chạy trừ khi gọi lại hàm nhưng t vẫn truy xuất được biến name trong hàm sayname và in ra màn hình thông quan hàm 
