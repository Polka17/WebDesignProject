function validateName() {
  var name = document.getElementById("name").value;
  
  if (name == "") {
	document.getElementById("nameError").style.display = "block";
    document.getElementById("nameError").innerHTML = "Name is required";
    return false;
  }
  else if (!/^[a-zA-Z ]*$/.match(name)) {
	document.getElementById("nameError").style.display = "block";
    document.getElementById("nameError").innerHTML = "Name can only contain letters and spaces";
    return false;
  }
  else{
	  document.getElementById("nameError").style.display = "none";
	  document.getElementById("nameError").innerHTML = "";
	  return true;
  }
}

function emailValidate(){
   var email = document.getElementById("email").value;
   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if (email == "") {
	document.getElementById("emailError").style.display = "block";
    document.getElementById("emailError").innerHTML = "Email is required";
    return false;
   }
   else if (!emailRegex.match(email)) {
	document.getElementById("emailError").style.display = "block";
    document.getElementById("emailError").innerHTML = "Invalid email address";
    return false;
   }
   else{
	   document.getElementById("emailError").style.display = "none";
	   document.getElementById("emailError").innerHTML = "";
	    return true;
   }
 
}
function passwordValidate(){
  var pass = document.getElementById("password").value;
	 
  if (pass.length < 8) {
	document.getElementById("passwordError").style.display = "block";
    document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
    return false;
  }
  else if (!/[A-Z]/.match(pass)) {
	document.getElementById("passwordError").style.display = "block";
    document.getElementById("passwordError").innerHTML = "Password must contain at least one uppercase letter";
    return false;
  }
  else if (!/[a-z]/.match(pass)) {
	document.getElementById("passwordError").style.display = "block";
    document.getElementById("passwordError").innerHTML = "Password must contain at least one lowercase letter";
    return false;
  }
  else if (!/\d/.match(pass)) {
	document.getElementById("passwordError").style.display = "block";
    document.getElementById("passwordError").innerHTML = "Password must contain at least one digit";
    return false;
  }
  else{
	  document.getElementById("passwordError").style.display = "none";
	  document.getElementById("passwordError").innerHTML = "";
	    return true;
   }
}

function passwordConfirm(){
  var confirmPassword = document.getElementById("password-confirm").value;
  var pass = document.getElementById("password").value;
  if (pass != confirmPassword) {
	document.getElementById("confirmPasswordError").style.display = "block";
    document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
    return false;
  }
  else{
	  document.getElementById("confirmPasswordError").style.display = "none";
	  document.getElementById("confirmPasswordError").innerHTML = "";
	  return true;
   }
}
function validateSignUpForm(){
	validateName(); 
	emailValidate(); 
	passwordValidate(); 
	passwordConfirm();  
	if (!validateName() || !emailValidate() || !passwordValidate() || !passwordConfirm())
	{ 
		event.preventDefault();
	}
}
function validateSignInForm(){ 
	emailValidate(); 
	passwordValidate();  
	if (!emailValidate() || !passwordValidate())
	{ 
		event.preventDefault();
	}
}