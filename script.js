document.getElementById("validationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

    // Name validation
    if (name.value.trim().length < 3) {
        setError(name, "Name must be at least 3 characters long");
        isValid = false;
    } else {
        clearError(name);
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        setError(email, "Enter a valid email");
        isValid = false;
    } else {
        clearError(email);
    }

    // Password validation
    if (password.value.length < 6) {
        setError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        clearError(password);
    }

    // Confirm password validation
    if (confirmPassword.value !== password.value) {
        setError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function setError(input, message) {
    let small = input.nextElementSibling;
    small.innerText = message;
    small.style.display = "block";
}

function clearError(input) {
    let small = input.nextElementSibling;
    small.innerText = "";
}
