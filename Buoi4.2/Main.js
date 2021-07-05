let emailElement = document.querySelector('#email');
let passElement = document.querySelector('#pass')
let errorEmail = document.querySelector('.messageEmail')
let errorPass = document.querySelector('.messagePass')
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

emailElement.onblur = function () {
    if (!emailElement.value.trim()) {
        errorEmail.textContent = 'Deny' 
        errorEmail.classList.add('colorRed')
    }
    else if (regex.test(emailElement.value)) {
        errorEmail.textContent = 'Valid email' 
        errorEmail.classList.add('colorBlue')
    }
    else {
        errorEmail.textContent = 'Invalid email' 
        errorEmail.classList.add('colorRed')
    }
}

passElement.onblur = function() {
    let passlength = passElement.value.length;
    if(!passElement.value.trim()) {
        errorPass.textContent = 'you have not entered'
        errorEmail.classList.add('colorRed')
    }
    else if ( passlength >= 3 && passlength <= 6) {
        errorPass.textContent = 'Valid PassWord'
        errorEmail.classList.add('colorBlue')
    } else {
        errorPass.textContent = 'Please enter between 3 and 10 characters'
        errorEmail.classList.add('colorRed')
    }
}  