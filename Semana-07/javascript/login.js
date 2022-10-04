window.onload = function() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.getElementById('login');
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
  var alphaExpression = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
  
  function isValidEmail() {
    return emailExpression.test(email.value);
  }

  email.onfocus = function() {
    email.classList.add('border');
    document.getElementById('email-message').style.visibility = 'hidden';
  }
  
  email.onblur = function() {
    if (isValidEmail()) {
      email.classList.remove('border', 'error','border-none');
      email.classList.add('correct');   
      document.getElementById('email-message').style.visibility = 'hidden';
    }
    else {
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

  password.onfocus = function() {
    password.classList.add('border');
    document.getElementById('password-message').style.visibility = 'hidden';
  }
  
  password.onblur = function() {
    if (isValidPassword()) {
      password.classList.remove('border', 'error', 'border-none');
      password.classList.add('correct');
      document.getElementById('password-message').style.visibility = 'hidden';
    }
    else {
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

/*
    fetch(url)
      .then(function(response) {
        if (response.status < 200 || response.status > 299) {
          throw new Error('Error')
        }
        return(response.json());
      })
      // .then(function(response) {
      //   return(response.json());
      // })
      .then(function(data) {
        if (data.success == true) {
          var dataString = JSON.stringify(data.msg) 
          alert(dataString + '\n' + paramsAlert);
        }
        else {
          var errorMessage = []
          for (var j=0; j<data.errors.length; j++) {
            errorMessage.push(data.errors[j].msg);
          }
          alert(errorMessage.join('\n') + '\n' + paramsAlert);
        }
        })
        .catch(function(error) {
          return(error);
        })       
    }*/