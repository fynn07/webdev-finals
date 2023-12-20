const username = "correct_username";
const password = "correct_password";

function login(){
    let try_user = document.getElementById("user").value;
    let try_pass = document.getElementById("pass").value;

    if(username === try_user && password === try_pass){
        window.location.href ="professional_profile.html";
        alert("Login Successful. Redirecting... ");
    }
    else{
        alert("Login Failed.");
    }
}