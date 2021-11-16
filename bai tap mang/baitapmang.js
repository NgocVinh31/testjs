//bài 1:  Đảo ngược chuỗi
// let bai1=(str)=>{
//     return arrStr= str.split(" ").reverse().join(" ");
// }

// console.log(bai1("hello vinh"));



//bài 3 in ra 1 chuỗi có từ đầu tiên in hoa
// vd hello vinh=> Hello Vinh

// const str1="hello vinh";
// let bai3=(str)=>{
//     return str.split(" ").map((item)=>{
//         let conlai=item.slice(1);
//         let firstword=item.charAt(0).toUpperCase();
//         return firstword+conlai;
//     }).join(" ");
// }

// console.log(bai3(str1));


// let array1=[1,9,5,7];
// console.log(array1);
// let array2=[...array1];
// array2.pop();
// console.log(array2);
// console.log(array1);


let array1=[1,5,8,9];
let array2=[1,5,8,9,8,6,4];
let array3=[9,8,7,6,5,4,3,2,1];

let array4=[...array1];
console.log(JSON.stringify(array4));
JSON.stringify

const [a,...d]=array1
console.log(d);
console.log(array1.length);

setInterval(()=>{
    console.log("jsndv");
}, 1000);