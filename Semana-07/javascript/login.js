window.onload = function() {

  var disable = document.getElementById('login');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.getElementById('login');
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
  var alphaExpression = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
  
  function disableButton() {
    if(isValidEmail() && isValidPassword()) {
      disable.classList.remove('disable-btn');
    }
    else {
      disable.classList.add('disable-btn')
    }
  }

  function isValidEmail() {
    return emailExpression.test(email.value);
  }

  function isValidPassword() {        
    for (var i = 0; i < password.value.length; i++) {
      if (!alphaExpression.includes(password.value[i])) {
        return false;
      }
    }
    if (password.value.length < 3) {
      return false;
    }
    return true;
  }

  email.onfocus = function() {
    email.classList.add('border');
    document.getElementById('email-message').style.visibility = 'hidden';
  }
  
  email.onblur = function() {
    if (isValidEmail()) {
      disableButton();
      email.classList.remove('border', 'error','border-none');
      email.classList.add('correct');   
      document.getElementById('email-message').style.visibility = 'hidden';
    }
    else {
      disableButton();
      email.classList.remove('border', 'correct','border-none');
      email.classList.add('error');
      document.getElementById('email-message').style.visibility = 'visible';
      if (email.value.length >= 1) { 
        document.getElementById('email-message').innerHTML = 'Email is not valid';
      }
      else if (email.value.length < 1) { 
        document.getElementById('email-message').innerHTML = 'Email Required';
      }
    }
  }

  password.onfocus = function() {
    password.classList.add('border');
    document.getElementById('password-message').style.visibility = 'hidden';
  }
  
  password.onblur = function() {
    if (isValidPassword()) {
      disableButton();
      password.classList.remove('border', 'error', 'border-none');
      password.classList.add('correct');
      document.getElementById('password-message').style.visibility = 'hidden';
    }
    else {
      disableButton();
      password.classList.remove('border-none', 'correct', 'border-none');
      password.classList.add('error');
      document.getElementById('password-message').style.visibility = 'visible';
      if (password.value.length >= 1) {
        document.getElementById('password-message').innerHTML = 'Password should have 3 or more characters';
      }
      else if (password.value.length < 1) {
        document.getElementById('password-message').innerHTML = 'Password Required';
      }
    }
  }   

  button.addEventListener('click', function(e) {
    e.preventDefault();

    queryParams = 'login?email='+email.value+'&password='+password.value;
    paramsAlert = 'Email: ' + email.value + '\n' +'Password: ' + password.value;

    var resp;
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/' + queryParams; 

    fetch(url) 
      .then(function(response) {
        resp = response
        return(response.json());
      })
      .then(function(data) {
        if (data.success == true) {
          var dataString = JSON.stringify(data.msg) 
          alert(dataString + '\n' + paramsAlert);
        }
        else {
          alert('Error: ' + data.msg + '\n' + paramsAlert);
          if (resp.status < 200 || resp.status > 299) {
            throw new Error('Error' + data.msg)
          }
        }
      }) 
  })



}

