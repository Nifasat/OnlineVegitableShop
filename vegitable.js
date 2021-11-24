function validation(){
    console.log("validation");
    let name = document.getElementById("name").value;
    let Quantity = document.getElementById("Quantity").value;
    let email = document.getElementById("email").value;
    if(name.length<4)
    {
        text = "Please Enter Valid Name";
        alert(text);
        return false;
    }
    if(isNaN(Quantity)||Quantity<=0)
    {
        text = "Please Enter valid Quantit"
        alert(text);
        return false;
    }
    if(email.indexOf('@') == -1)
    {
        text = "Please Enter Valid Email";
        alert(text);
        return false;
    }
    alert("Added to Cart");
    return true;
}