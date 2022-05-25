var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var repasswordError = document.getElementById('repassword-error');
var submitError = document.getElementById('submit-error');



function validateName(){
    var username = document.getElementById('username').value;

    if(username.length == 0){
        nameError.innerHTML = 'user-name is required';
        return false;
    }
    if(username.length < 5){
        nameError.innerHTML = 'user-name is to short';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
 function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'E-mail is required';
        return false;
      }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Enter a valid E-mail';
        return false;
      }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
   }

 function validatePass(){
    var password = document.getElementById('password').value;
   

    if(password.length == 0){
        passwordError.innerHTML = 'field cannot be empty here';
        return false;
    }
    if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
        passwordError.innerHTML = 'min eight characters/number';
        return false;

    }
     passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    }

    function check(elem){
        var rtc = document.getElementById('password').value;
        
        
        if(elem.value.length == 0){

            repasswordError.innerHTML = 'Cannot be Empty';
            return false;
     }
     if(elem.value == rtc){
         repasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
         return true;
    }
     repasswordError.innerHTML = 'password missmatch';
     return false;
      }

      function validateSubmit(){
          if(!validateName() || !validateEmail() || !validatePass() || !check()){
              submitError.style.display = 'block';
              submitError.innerHTML = "please fill the empty field";
              setTimeout(function() {  submitError.style.display = 'none';}, 3000 );
              return false;
          }
      }
    
      
      
      







