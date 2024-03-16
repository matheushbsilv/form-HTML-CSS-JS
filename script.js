
const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit",(event) => {
    event.preventDefault();

    checkForm();
})

email.addEventListener("blur", ()  => {
    checkInputEmail();
})

username.addEventListener("blur", ()  => {
    checkInputUsermane();
})

password.addEventListener("blur", ()  => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", ()  => {
    checkInputPasswordConfirmation();
})

function checkInputUsermane(){
    const usernameValue = username.value;

    if(usernameValue === ""){
       errorInput(username, "Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPassword = passwordConfirmation.value;

    if(confirmationPassword ===""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória!")
    }else if(confirmationPassword !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
    
    
}

function checkForm(){
    checkInputUsermane();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItem = form.querySelectorAll(".form-content")

    const isValid = [...formItem].every((item) =>{
        return item.className === "form-content"
    });

    if(isValid){
        alert("CADASTRADO COM SUCESSO!")
    }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}