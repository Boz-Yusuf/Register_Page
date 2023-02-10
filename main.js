let submitButton = document.getElementById("submit");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("confirm_password");
let pattern = /^[^ ]+@[a-z]+\.[a-z]{2,3}$/im;
let emptyRow = document.createElement("br");


submitButton.addEventListener('click',Register);



function Register(){
    LengthValidation(username,"username");
    LengthValidation(password,"password");
    SamePasswordValidation(password,password2);
    MailValidation(email);
}

function LengthValidation(value,valueType){
    if(value.value.length < 6){  
        value.parentElement.children[2].innerText = `${valueType} must be at least 6 characters`;
        value.style.border = "2px solid var(--waring-color)";
    }else{
        value.parentElement.children[2].innerText = ``;
        value.parentElement.children[2].append(emptyRow);
        value.style.border = "2px solid var(--text-color)";
    }
}

function MailValidation(email){
    if(!email.value.match(pattern)){
        email.parentElement.children[2].innerText = `Email is not valid`;
        email.style.border = "2px solid var(--waring-color)";
    }else{
        email.style.border = "2px solid var(--text-color)";
        email.parentElement.children[2].innerText = ``;
        email.parentElement.children[2].append(emptyRow);
    }
}

function SamePasswordValidation(password,password2){
    if(password2.value === ""){
        password2.parentElement.children[2].innerText = `Confirm Password is required`;
        password2.style.border = "2px solid var(--waring-color)";
    }else if(password.value !== password2.value){
        password2.parentElement.children[2].innerText = `Passwords do not match`;
        password2.style.border = "2px solid var(--waring-color)";
    }else{
        password2.style.border = "2px solid var(--text-color)";
        password2.parentElement.children[2].innerText = ``;
        password2.parentElement.children[2].append(emptyRow);
    }
}

