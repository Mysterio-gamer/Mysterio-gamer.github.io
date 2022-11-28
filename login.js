function validate() {
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    if(user=="admin"&& password=="user")
    {
        alert("login successfully");
        return false
    }
    else 
    {
        alert("Login failed");
    }
}