console.log(`Bài 1:  Khai báo 3 biến số a, b, c. In ra màn hình số lớn nhất`)
let a=7;
let b=9;
let c=10;

console.log(`a=${a}; b=${b}; c=${c}`)
if(a>b){
    if(a>c)
    {
       console.log(`so lớn nhất là a: ${a}`);
    }
    else{
        console.log(`so lớn nhất là c: ${c}`);
    }
} else if(b>c)
{
    console.log(`so lớn nhất là b: ${b}`);
}
else {
    console.log(`so lớn nhất là c: ${c}`);
}


console.log("bài 2: Khai báo chuỗi ký tự, đếm trong chuỗi xem có bao nhiêu lần xuất hiện ký tự 'x'");
let string1="frontend";
let count=0;
let x="e";
for(let i=0;i<string1.length;i++)
{
    if(string1.charAt(i)===x)
    {
        count++;
    }
}
console.log(`so lần xuất hiện x:(${x}) trong chuỗi ${string1} là: ${count}`);

console.log("Bài 3: khai báo mảng số nguyên bất kỳ gồm 5 phần tử sau đó:")
let array1=[2,5,9,4,6];
let max=0;
let sum=0;
let countArray=0;
for(let i=0;i<array1.length;i++)
{
    if(array1[i]>max)
    {
        max=array1[i];
    }
    if(array1[i]%3===0)
    {
        countArray++;
    }
    sum=sum+array1[i];
}
console.log(array1);
console.log("a.Tìm phần tử lớn nhất của mảng");
console.log(`Phần tử lớn nhất của mảng là: ${max}`);
console.log("b.Tính tổng các phần tử trong dãy");
console.log(`Tổng các phần tử trong dãy là: ${sum}`);
console.log("c. Đếm số phần tử chia hết cho 3");
console.log(`Số phần tử chia hết cho 3 trong dãy là: ${countArray}`);
console.log("d. Tìm vị trí của phần tử có giá trị = 6")
for(let i=0;i<array1.length;i++)
{
    if(array1[i]===6)
    {
        console.log(`Vị trí trong mảng bằng 6: ${i}`);
    }
}