let generateButton = document.getElementById('generate-button')
let passwordInput = document.getElementById('password-input')

function generatePassword(){
    let password=''
    let possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+='

    for(let i=0; i<8; i++){
        password += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    passwordInput.value = password
}

generateButton.addEventListener('click', generatePassword)
