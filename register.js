// =========================================
// VERIFYPRO REGISTER JAVASCRIPT
// =========================================

// -------------------------------
// SHOW / HIDE PASSWORD
// -------------------------------

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {

    button.addEventListener("click", function () {

        const target = document.getElementById(this.dataset.target);

        if (target.type === "password") {

            target.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            target.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    });

});


// -------------------------------
// FORM
// -------------------------------

const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


// -------------------------------
// VALIDATION FUNCTIONS
// -------------------------------

function validateEmail(emailAddress){

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(emailAddress);

}


function validatePhone(phoneNumber){

    const pattern = /^[0-9]{10,15}$/;

    return pattern.test(phoneNumber);

}


function passwordStrength(pass){

    if(pass.length < 8){

        return false;

    }

    return true;

}


// -------------------------------
// SUBMIT
// -------------------------------

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = fullname.value.trim();

    const mail = email.value.trim();

    const phoneNumber = phone.value.trim();

    const pass = password.value;

    const confirm = confirmPassword.value;

    // Full Name

    if(name.length < 3){

        alert("Full Name must contain at least 3 characters.");

        fullname.focus();

        return;

    }

    // Email

    if(!validateEmail(mail)){

        alert("Please enter a valid email address.");

        email.focus();

        return;

    }

    // Phone

    if(!validatePhone(phoneNumber)){

        alert("Please enter a valid phone number.");

        phone.focus();

        return;

    }

    // Password

    if(!passwordStrength(pass)){

        alert("Password must be at least 8 characters.");

        password.focus();

        return;

    }

    // Confirm Password

    if(pass !== confirm){

        alert("Passwords do not match.");

        confirmPassword.focus();

        return;

    }

    // Terms

    const checkbox = document.querySelector(".terms input");

    if(!checkbox.checked){

        alert("Please accept the Terms and Privacy Policy.");

        return;

    }

    // Loading Button

    const button = document.querySelector(".register-btn");

    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

    button.disabled = true;

    // Simulate Request

    setTimeout(function(){

        alert("Frontend Validation Successful!\n\nPHP Backend will process registration next.");

        button.innerHTML = "Create Account";

        button.disabled = false;

    },2000);

});