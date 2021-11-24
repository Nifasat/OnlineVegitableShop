function validation(){
    console.log("validation");
    let name = document.getElementById("name").value;
    let password = document.getElementById("number").value;
    if(name.length<4)
    {
        text = "Please Enter Valid Name";
        alert(text);
        return false;
    }
    if(password.length == 0)
    {
        text = "Please Enter valid Password"
        alert(text);
        return false;
    }
    alert("Login SuccessFul Go Back to Home Page");
    return true;
}