
let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#buttom");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstvwxyz0123456789!@#$%&*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass= "";

    for(let i =0, n = charset.length; i < sliderElement.value; ++i){
     pass += charset.charAt(Math.floor(Math.random()* n));
     
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

}

function copyPassword(){
    alert("SENHA COPIADA COM SUCESSO!!")
    navigator.clipboard.writeText(novaSenha)
}

