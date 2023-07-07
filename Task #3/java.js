function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var termsInput = document.getElementById("terms");
    
    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();
    var termsChecked = termsInput.checked;
    
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var termsError = document.getElementById("termsError");
    
    var isValid = true;
    

    if (!termsChecked) {
      termsError.textContent = "You must agree to the terms and conditions";
      isValid = false;
    } else {
      termsError.textContent = "";
    }
    
    if (isValid) {
      alert("Form submitted successfully!");
    }
    
    return isValid;
  }