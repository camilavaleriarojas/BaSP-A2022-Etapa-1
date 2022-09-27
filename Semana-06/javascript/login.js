window.onload = function() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.getElementById('login');
  var passwordExpression = /^([a-zA-Z0-9]+)$/ 
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
  
  function isValidEmail() {
    return emailExpression.test(email.value);
  }

  email.onfocus = function() {
    email.classList.add('border');
    document.getElementById('email-message').style.visibility = 'hidden';
  }
  
  email.onblur = function() {
    if(isValidEmail()) {
      email.classList.remove('border', 'error','border-none');
      email.classList.add('correct');   
      document.getElementById('password-message').style.visibility = 'hidden';
    }
    else {
      email.classList.remove('border', 'correct','border-none');
      email.classList.add('error');
      document.getElementById('password-message').style.visibility = 'visible';
    }
  }
  
  function isValidPassword() {
    return passwordExpression.test(password.value);
  }

  password.onfocus = function() {
    password.classList.add('border');
    document.getElementById('password-message').style.visibility = 'hidden';
  }
  
  password.onblur = function() {
    if(isValidPassword()) {
      password.classList.remove('border', 'error', 'border-none');
      password.classList.add('correct');
      document.getElementById('password-message').style.visibility = 'hidden';
    }
    else {
      password.classList.remove('border-none', 'correct', 'border-none');
      password.classList.add('error');
      document.getElementById('password-message').style.visibility = 'visible';
    }
  }   

  button.addEventListener('click', function(e) {
    e.preventDefault();
    if(isValidEmail() && isValidPassword()) {
      alert('Email: ' + email.value + '\n Password: ' + password.value);
    }
    else if(!isValidEmail() && isValidPassword()) {
      alert('Email is not valid!');
    }
    else if(isValidEmail() && !isValidPassword()) {
      alert('Password is not valid!');
    }
    else {
      alert('Email and Password not valid!');
    } 
  })

}
