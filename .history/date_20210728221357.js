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



