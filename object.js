const object1={
    name: "vinh",
    age: "19",
    school: "power",
    game: "valorant",
    "test-case": "hello",// giống php chỉ là thay dau => thanh :
    hello1: ()=>{
        alert("hello");
    }
};
// cos 2 cách truy xuất;
//cách 1: 
console.log(object1.name);
//cách 2:
console.log(object1["test-case"]);//cách này giống php
//thêm vào pbject

object1.them="thêm vào";

// sửa 

object1.name="sửa lại";
// xóa

delete object1.school;


console.log(object1);

// cách duyêt từng phần tử trong object
//dùng for in

//key là các tên key trong object
for( let key in object1)
{
    console.log(object1[key]);// cách lấy value trong object
}

// các method trong object 

// object.key: trả về 1 mảng có chứa key của object bên trong

Object.keys(object1);




const object2={
    name: "khánh",
    age: "21",
    school: "work",
    game: "valorant",
};

console.log(Object.entries(object2));


obj1={
    a: 1,
    b: 2,
    c:3
}

obj2={
    a: 1,
    b: 2,
    c:3,
    d:4,
}
console.log(JSON.stringify(obj1));
function test(obj1, obj2)
{
    let test1=JSON.stringify(obj1);
    let test2=JSON.stringify(obj2);
    if(test1===test2)
    {
        console.log("TRUE");
    }
    else{
        console.log("FALSE");
    }
}
test(obj1, obj2);