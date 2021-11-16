//bài 1 viết hàm so sánh hai số a và b tìm và in ra số lớn nhất
function bai1(a,b)
{
    let message="mời nhập số";
    if(typeof a!=="number"|| typeof b!=="number"){
        return message;
    }
    else{
        return(Math.max(a,b));
    }
}
console.log(bai1(6,6));

//bài 2 in ra chữ cái đầu tiên là chữ in hoa
//vd vinh=> Vinh
function bai2(string1="")
{
    let error1="Mời nhập chữ vào";
    let firstchar="";
    let conlai="";
    if(string1.length===0)
    {
        return error1;
    }
    else{
        firstchar=string1.toLowerCase().charAt(0).toUpperCase();
        conlai=string1.slice(1);
        return `${firstchar}${conlai}`;
    }
}
console.log(bai2("linh"));
let name2="vinh";
//bài 3 sử dụng phần callback (callback là thêm 1 function là 1 paremeter)
function bai