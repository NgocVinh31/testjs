// const array1=["vinh", "minh","tuan", "khánh"]
// console.log(array1)
// array1.pop()
// console.log(array1)
// array1.push("hello vinh")
// console.log(array1)
// console.log(array1.includes("mnh"))
//  const name4="vinh";


// const arrayNUmber=[1,5,8,9,5,7];
// console.log(arrayNUmber);
//  const arrayNUmber2 =arrayNUmber.map((value)=>{
//      if(value>2)
//      {
//          return value;
//      }
//  });
//  console.log(arrayNUmber2);



const array1=[1,0,"sdjhbv", "", null, NaN];
let arrayFix=array1.filter((item)=>{
    return Boolean(item);
});

console.log(arrayFix);