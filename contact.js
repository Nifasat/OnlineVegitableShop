function validation(){
    console.log("validation");
    let name = document.getElementById("name").value;
    let phone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let purpose = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    if(name.length<4)
    {
        text = "Please Enter Valid Name";
        alert(text);
        return false;
    }
    if(isNaN(phone)||phone.length!=10)
    {
        text = "Please Enter valid Phone Number"
        alert(text);
        return false;
    }
    if(email.indexOf('@') == -1)
    {
        text = "Please Enter Valid Email";
        alert(text);
        return false;
    }
    if(purpose.length == 0)
    {
        text = "Please Enter the Subject";
        alert(text);
        return false;
    }
    if(message.length == 0)
    {
        text = "Please Enter the message to be sent";
        alert(text);
        return false;
    }
    alert("Message Sent Successfully");
    return true;
}