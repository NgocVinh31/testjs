let number1=2
console.log("nsdjvn");
function login(number1){
    let username =document.getElementById("account").value;
    let password =document.getElementById("password").value;

    if(username === "" || password === "")
    {
        alert("Mời bạn điền đầy đủ thông tin");
    }
    else if(username==="admin" && password==="admin"){
        alert("Đăng nhập thành công");
        alert(number1);
    }
    else{
        alert("Sai tài khoản hoặc mật khẩu");
    }
}