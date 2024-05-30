document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reg_1");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        // Validate Email
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Email is not valid");
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        // Validate Password
        if (passwordInput.value.trim().length < 8) {
            showError(passwordInput, "Password must be at least 8 characters");
            isValid = false;
        } else {
            showSuccess(passwordInput);
        }

        if (isValid) {
            window.location.href = "index.html";
        }
    });

    function showError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        small.innerText = message;
        formControl.classList.remove("success");
        formControl.classList.add("error");
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.classList.remove("error");
        formControl.classList.add("success");
        const small = formControl.querySelector("small");
        small.innerText = "";
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
