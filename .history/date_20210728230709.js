const date1=new Date();
console.log(date1);
//đây là cách khởi tạo date


// timestamp and epoch time and unix time
//timestamp là dùng để tính ra thời gian minisecond minisecond nhỏ hơn cả second

console.log(date1.getTime());//đây là kêt quả của timestmapt
//kết quả tính sẽ ra 1 dãy số và kêt quả nó dựa vào epcoch time và unix time
//epoch time chỉ cần biết là thời gian 1/1/1970 00:00  còn unix time là múi h 
//=> timestamp dựa vào epoch time và unix time
// cách hiển thị ra thời gian epochTime
console.log(new Date(0));
//nhân tiện trong ngoặc date có thể thêm các số vào
//vì do lệch múi h nên không ra được 12h đêm
//núi chung cái timestamp dùng để làm cái phần thời gian chạy trên web và hẹn thời gian

//có 4 cách khởi tạo date


//c1
let c1=new Date();
//c2 truyền timestampt vào

let c2=new Date(0)

// c3 truyền date string
//là truyền các số vào thay đổi ngày tháng trong string 
//vd1 
console.log(new Date("2020-05"));//truyền tháng và năm
//còn nhiều cách truyền khác nữa 
//c4 truyền các số vào để thay đổi toàn bộ thời gian
//truyền theo thứ tự giảm dần
//năm tháng ngay giờ phút giây minisecond
console.log(new Date(2019,05,01,05,23,23,23));
//tại sao mình cho tháng 6 nhưng nó lại in ra tháng 7 
//vì tháng trong js nó tính từ 0 nghĩa là tháng 1 là số 0 rồi 2 là 1 rồi cứ thế
//muốn ra tháng 6 chỉ cần thay thành 05


console.log("các get trong date")
//các phương thức get của date
const birthday =new Date(2021,06,6);
console.log(birthday);
//get năm
console.log(birthday.getFullYear());
//get tháng
console.log(birthday.getMonth());
//chú ý month trong js tính từ 0 nên 0 tương đương t1  6 là t7
//get day
console.log(birthday.getDay());
//get giờ
console.log(birthday.getHours());
//get phút
console.log(birthday.getMinutes());
//get minisecond
console.log(birthday.getMilliseconds());
//get second
console.log()




