let submitButton = document.getElementById("submit");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("confirm_password");
let pattern = /^[^ ]+@[a-z]+\.[a-z]{2,3}$/im;
let emptyRow = document.createElement("br");


submitButton.addEventListener('click',Register);



function Register(){
    LengthValidation(username);
    LengthValidation(password);
    SamePasswordValidation(password,password2);
    MailValidation(email);
}

function LengthValidation(value){
    if(value.value.length < 6){  
        value.style.border = "2px solid var(--waring-color)";
        value.parentElement.children[2].style.visibility = "visible"
    }else{
        value.style.border = "2px solid var(--text-color)";
        value.parentElement.children[2].style.visibility = "hidden"
    }
}

function MailValidation(email){
    if(!email.value.match(pattern)){
        email.parentElement.children[2].style.visibility = "visible";
        email.style.border = "2px solid var(--waring-color)";
    }else{
        email.parentElement.children[2].style.visibility = "hidden";
        email.style.border = "2px solid var(--text-color)";
    }
}

function SamePasswordValidation(password,password2){
    if(password2.value === ""){
        password2.parentElement.children[2].style.visibility = "visible";
        password2.style.border = "2px solid var(--waring-color)";
    }else if(password.value !== password2.value){
        password2.parentElement.children[2].innerText = `Passwords do not match`;
        password2.parentElement.children[2].style.visibility = "visible";
        password2.style.border = "2px solid var(--waring-color)";
    }else{
        password2.style.border = "2px solid var(--text-color)";
        password2.parentElement.children[2].style.visibility = "hidden";
        password2.parentElement.children[2].append(emptyRow);
    }
}

