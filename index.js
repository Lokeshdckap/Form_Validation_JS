// Targetting the required elements
const form = document.querySelector("#form")
const userName = document.querySelector(".userName")
const email = document.querySelector(".Email")
const password = document.querySelector("#PassWord")
const retypePassword = document.querySelector("#Retype")
// const formGrp = document.querySelector(".formGrp")

// protype enabathu namba create panraaa oru method using regex athavathu isNaN pola

String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z\s]+$/)
}

String.prototype.isPassword = function () {
    return !!this.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
}

// its is form submitting action

form.addEventListener("submit", validation)

// its a checkRequired function


function checkRequired(inputs) {
    inputs.forEach(element => {
        if (element.value === "") {
            errors(element, `${getValues(element)} is Required`)
        }
        else {
            success(element)
        }
    })
}



// its is validation for all functions and send aruguments for all functions 

function validation(e) {
    e.preventDefault()
    checkRequired([userName, email, password, retypePassword])
    checkLength([userName, password], 5, 10)
    checkConfirmpsw(password, retypePassword)
    checkEmail(email)
    checkAlpha(userName)
    checkPassword(password)
    // checkPassword(retypePassword)
}

// its is a checklength for all inputs

function checkLength(input, min, max) {
    input.forEach(element => {
        if (element.value.trim().length < min) {
            errors(element, `${getValues(element)} is must be atleast greater than ${min} characters`)
        }
        else if (element.value.trim().length > max) {
            errors(element, `${getValues(element)} is must be atleast lesser than ${max} characters`)
        }
        else {
            success(element)
        }
    })
}

// its is a check password 1 and password 2 matching

function checkConfirmpsw(password1, password2) {
    if (password1.value !== password2.value) {
        errors(password2, `${getValues(password2)} doesn't match`)
    }

}

// its is a throw a error msg for when user give a wrong input


function errors(input, msg) {
    const formGrp = input.parentElement
    formGrp.className = "formGrp required"
    const p = formGrp.querySelector("p")
    p.innerText = msg;

}

// its is a throw a success msg for when user give correct input


function success(input) {

    const formGrp = input.parentElement
    formGrp.className = "formGrp success"
    const p = formGrp.querySelector("p")
    p.innerText = "";
}


// its is a getAttributes for data-name for show a required fields

function getValues(input) {
    // return input.id
    return input.getAttribute("data-name")
}

// its is check email function

function checkEmail(input) {
    if (!input.value.trim().isEmail()) {
        errors(input, 'This is not an valid email address')
    }
}

//its is a checkAlpha for userName inputs

function checkAlpha(input) {
    if (!input.value.trim().isAlpha()) {
        errors(input, 'User Name Must be letters')
    }
}

// its is a checkpassword for password inputs

function checkPassword(input) {
    if (!input.value.trim().isPassword()) {
        errors(input, 'Password Must be symbols & Special Characters')
    }
}

// localStorage.setItem("username",userName.value)