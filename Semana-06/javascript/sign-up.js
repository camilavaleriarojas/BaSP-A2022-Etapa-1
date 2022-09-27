window.onload = function() {
  
  var name = document.getElementById('name');
  var lastName = document.getElementById('last-name');
  var dni = document.getElementById('dni');
  var date = document.getElementById('date');
  var phone = document.getElementById('phone');
  var address = document.getElementById('address');
  var location = document.getElementById('location');
  var postalCode = document.getElementById('postal-code');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var repeatPassword = document.getElementById('repeat-password');

  var alphaExpression = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUWXYZ';
  var alphaNumericExpression = '0123456789áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUWXYZ';
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 

  /* NAME */

  function isValidName() {
    for (var i=0; i < name.value.length; i++) {
      if(!alphaExpression.includes(name.value[i])) {
        console.log('false')
      }
      else {
        console.log('true')
      }
    }
  }
 
  name.onfocus = function() {
    name.classList.add('border');
    document.getElementById('name-span').style.visibility = 'hidden'
  }

  name.onblur = function() {
    if(isValidName()) {
      name.classList.remove('border', 'error','border-none');
      name.classList.add('correct');  
      document.getElementById('name-span').style.visibility = 'hidden' 
    }
    else {
      name.classList.remove('border', 'correct','border-none');
      name.classList.add('error');
      document.getElementById('name-span').style.visibility = 'visible'
    }
  }

  /* LAST NAME */

  function isValidLastName() {
    for (var i=0; i < lastName.value.length; i++) {
      if(alphaExpression.includes(lastName.value[i]) && lastName.value.length > 3) {
        return true 
      }
    }
  }
  
  lastName.onfocus = function() {
    lastName.classList.add('border');
    document.getElementById('last-name-span').style.visibility = 'hidden'
  }

  lastName.onblur = function() {
    if(isValidLastName()) {
      lastName.classList.remove('border', 'error', 'border-none');
      lastName.classList.add('correct');
      document.getElementById('last-name-span').style.visibility = 'hidden'
    }
    else {
      lastName.classList.remove('border-none', 'correct', 'border-none');
      lastName.classList.add('error');
      document.getElementById('last-name-span').style.visibility = 'visible'
    }
  } 
  
  /* DNI */

  function isValidDni() {
    if(!isNaN(dni.value) && dni.value.length >= 7 ) {
      return true
    }
  }

  dni.onfocus = function() {
    dni.classList.add('border');
    document.getElementById('dni-span').style.visibility = 'hidden'
  }

  dni.onblur = function() {
    if(isValidDni()) {
      dni.classList.remove('border', 'error','border-none');
      dni.classList.add('correct');  
      document.getElementById('dni-span').style.visibility = 'hidden' 
    }
    else {
      dni.classList.remove('border', 'correct','border-none');
      dni.classList.add('error');
      document.getElementById('dni-span').style.visibility = 'visible'
    }
  }

  /* DATE */

  function isValidDate() {
    
  }

  date.onfocus = function() {
    date.classList.add('border');
    document.getElementById('date-span').style.visibility = 'hidden'
  }

  date.onblur = function() {
    if(isValidDate()) {
      date.classList.remove('border', 'error','border-none');
      date.classList.add('correct');  
      document.getElementById('date-span').style.visibility = 'hidden' 
    }
    else {
      date.classList.remove('border', 'correct','border-none');
      date.classList.add('error');
      document.getElementById('date-span').style.visibility = 'visible'
    }
  }
  
  /* PHONE */ 
  
  function isValidPhone() {
    if(!isNaN(phone.value) && phone.value.length === 10 ) {
      return true
    }
  }

  phone.onfocus = function() {
    phone.classList.add('border');
    document.getElementById('phone-span').style.visibility = 'hidden'
  }

  phone.onblur = function() {
    if(isValidPhone()) {
      phone.classList.remove('border', 'error','border-none');
      phone.classList.add('correct');  
      document.getElementById('phone-span').style.visibility = 'hidden' 
    }
    else {
      phone.classList.remove('border', 'correct','border-none');
      phone.classList.add('error');
      document.getElementById('phone-span').style.visibility = 'visible'
    }
  }

  /* ADDRESS */ 
  /* debe contener letras, numeros y un espacio entre medio */

  address.onfocus = function() {
    address.classList.add('border');
    document.getElementById('address-span').style.visibility = 'hidden'
  }

  address.onblur = function() {
    if(isValidPhone()) {
      address.classList.remove('border', 'error','border-none');
      address.classList.add('correct');  
      document.getElementById('address-span').style.visibility = 'hidden' 
    }
    else {
      address.classList.remove('border', 'correct','border-none');
      address.classList.add('error');
      document.getElementById('address-span').style.visibility = 'visible'
    }
  }

  /* LOCATION */
  /* texto alfanumerico + 3 letras */ 

  location.onfocus = function() {
    location.classList.add('border');
    document.getElementById('location-span').style.visibility = 'hidden'
  }

  location.onblur = function() {
    if(isValidPhone()) {
      location.classList.remove('border', 'error','border-none');
      location.classList.add('correct');  
      document.getElementById('location-span').style.visibility = 'hidden' 
    }
    else {
      location.classList.remove('border', 'correct','border-none');
      location.classList.add('error');
      document.getElementById('location-span').style.visibility = 'visible'
    }
  }

  /* POSTAL CODE */
 
  function isValidPostal() {
    if(!isNaN(postalCode.value) && postalCode.value.length > 3 && postalCode.value.length < 6) {
      return true
    }
  }

  postalCode.onfocus = function() {
    postalCode.classList.add('border');
    document.getElementById('postal-span').style.visibility = 'hidden'
  }

  postalCode.onblur = function() {
    if(isValidPostal()) {
      postalCode.classList.remove('border', 'error','border-none');
      postalCode.classList.add('correct');  
      document.getElementById('postal-span').style.visibility = 'hidden' 
    }
    else {
      postalCode.classList.remove('border', 'correct','border-none');
      postalCode.classList.add('error');
      document.getElementById('postal-span').style.visibility = 'visible'
    }
  }

  /* EMAIL */

  function isValidEmail() {
    return emailExpression.test(email.value);
  }

  email.onfocus = function() {
    email.classList.add('border');
    document.getElementById('email-span').style.visibility = 'hidden';
  }
  
  email.onblur = function() {
    if(isValidEmail()) {
      email.classList.remove('border', 'error','border-none');
      email.classList.add('correct');   
      document.getElementById('email-span').style.visibility = 'hidden';
    }
    else {
      email.classList.remove('border', 'correct','border-none');
      email.classList.add('error');
      document.getElementById('email-span').style.visibility = 'visible';
    }
  }
  
  /* PASSWORD */

  function isValidPassword() {
    for (var i=0; i < password.value.length; i++) {
      if(alphaNumericExpression.includes(password.value[i]) && password.value.length > 3) {
        return true 
      }
    }
  }

  password.onfocus = function() {
    password.classList.add('border');
    document.getElementById('password-span').style.visibility = 'hidden';
  }
  
  password.onblur = function() {
    if(isValidPassword()) {
      password.classList.remove('border', 'error', 'border-none');
      password.classList.add('correct');
      document.getElementById('password-span').style.visibility = 'hidden';
    }
    else {
      password.classList.remove('border-none', 'correct', 'border-none');
      password.classList.add('error');
      document.getElementById('password-span').style.visibility = 'visible';
    }
  }   

  // REPEAT PASSWORD //

  function isValidRepeatPassword() {
    if(repeatPassword.value === password.value && repeatPassword.value !== '') {
      return true
    }
  }

  repeatPassword.onfocus = function() {
    repeatPassword.classList.add('border');
    document.getElementById('repeat-password-span').style.visibility = 'hidden';
    /*if (repeatPassword.value !== password.value) {
      document.getElementById('repeat-password-span','password-span').innerHTML="No coinciden"
    }*/
  }

  repeatPassword.onblur = function() {
    if(isValidRepeatPassword()) {
      repeatPassword.classList.remove('border', 'error', 'border-none');
      repeatPassword.classList.add('correct');
      document.getElementById('repeat-password-span').style.visibility = 'hidden';
    }
    else {
      repeatPassword.classList.remove('border-none', 'correct', 'border-none');
      repeatPassword.classList.add('error');
      document.getElementById('repeat-password-span').style.visibility = 'visible';
    }
  } 

}