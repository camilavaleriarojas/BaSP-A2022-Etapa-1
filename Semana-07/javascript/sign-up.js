window.onload = function() {

  var button = document.getElementById('sign-up');
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

  var numeric = '0123456789';
  var alphaExpression = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  var alphaNumericExpression = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
  var alphaNumericSpaceExpression = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789 ';
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  function isValidName() {
    for (var i = 0; i < name.value.length; i++) {
      if (!alphaExpression.includes(name.value[i])) {
        return false;
      }
    }
    if (name.value.length <= 2) {
      return false;
    }
    return true;
  }

  function isValidLastName() {
    for (var i = 0; i < lastName.value.length; i++) {
      if (!alphaExpression.includes(lastName.value[i])) {
        return false;
      }
    }
    if (lastName.value.length <= 2) {
      return false;
    }
    return true;
  }

  function isValidDni() {
    if (!isNaN(dni.value) && (dni.value.length === 7 || dni.value.length === 8)) {
      return true;
    }
  }

  function isValidDate() {
    var today = new Date();
    var dateImput = new Date(date.value);
    if (dateImput < today) {
      return true;
    }
  }

  function isValidPhone() {
    if (!isNaN(phone.value) && phone.value.length === 10 ) {
      return true;
    }
  }

  function isValidAddress() {
    var alphaArray = []
    var numArray = []

    for (var i = 0; i < address.value.length; i++) {
      if (!alphaNumericSpaceExpression.includes(address.value[i])) {
        return false;
      }
      if (numeric.includes(address.value[i])) {
        numArray.push[address.value[i]];
      }
      if (alphaExpression.includes(address.value[i])) {
        alphaArray.push[address.value[i]];
      }
    }
    if (address.value.length < 5) {
      return false;
    }
    if (alphaArray === 0 || alphaNumericExpression === 0) {
      return false;
    }

    var splitedAddress = address.value.split(' ');
    if (!splitedAddress[0] || !splitedAddress[1]) {
      return false;
    }
    return true;
  }

  function isValidLocation() {
    for (var i = 0; i < location.value.length; i++) {
      if (!alphaExpression.includes(location.value[i])) {
        return false;
      }
    }
    if (location.value.length < 3) {
      return false;
    }
    return true;
  }

  function isValidPostal() {
    if (!isNaN(postalCode.value) && postalCode.value.length > 3 && postalCode.value.length < 6) {
      return true;
    }
  }

  function isValidEmail() {
    return emailExpression.test(email.value);
  }

  function isValidPassword() {
    for (var i = 0; i < password.value.length; i++) {
      if (!alphaNumericExpression.includes(password.value[i])) {
        return false;
      }
    }
    if (password.value.length < 8) {
      return false;
    }
    return true;
  }

  function isValidRepeatPassword() {
    if (repeatPassword.value === password.value && repeatPassword.value !== '') {
      return true;
    }
  }

  name.onfocus = function() {
    name.classList.add('border');
    name.classList.remove('correct', 'error');
    document.getElementById('name-span').style.visibility = 'hidden';
  }

  name.onblur = function() {
    if (isValidName()) {
      name.classList.remove('border', 'error');
      name.classList.add('correct');
      document.getElementById('name-span').style.visibility = 'hidden';
    }
    else {
      name.classList.remove('border', 'correct');
      name.classList.add('error');
      document.getElementById('name-span').style.visibility = 'visible';
      if (name.value.length < 1) {
        document.getElementById('name-span').innerHTML = 'Name Required';
      }
      else if (name.value.length < 3) { 
        document.getElementById('name-span').innerHTML = 'Name must have more than 3 letters';
      }
      else if (name.value.length > 3) {
        document.getElementById('name-span').innerHTML = 'Name must have only letters';
      }
    }
  }

  lastName.onfocus = function() {
    lastName.classList.add('border');
    lastName.classList.remove('correct', 'error');
    document.getElementById('last-name-span').style.visibility = 'hidden';
  }

  lastName.onblur = function() {
    if (isValidLastName()) {
      lastName.classList.remove('border', 'error');
      lastName.classList.add('correct');
      document.getElementById('last-name-span').style.visibility = 'hidden';
    }
    else {
      lastName.classList.remove('border-none', 'correct');
      lastName.classList.add('error');
      document.getElementById('last-name-span').style.visibility = 'visible';
      if (lastName.value.length < 1) {
        document.getElementById('last-name-span').innerHTML = 'Last Name Required';
      }
      else if (lastName.value.length < 3) { 
        document.getElementById('last-name-span').innerHTML = 'Last Name must have more than 3 letters';
      }
      else if (lastName.value.length > 3) {
        document.getElementById('last-name-span').innerHTML = 'Last Name must have only letters';
      }
    }
  }

  dni.onfocus = function() {
    dni.classList.add('border');
    dni.classList.remove('correct', 'error');
    document.getElementById('dni-span').style.visibility = 'hidden';
  }

  dni.onblur = function() {
    if (isValidDni()) {
      dni.classList.remove('border', 'error');
      dni.classList.add('correct');
      document.getElementById('dni-span').style.visibility = 'hidden';
    }
    else {
      dni.classList.remove('border', 'correct');
      dni.classList.add('error');
      document.getElementById('dni-span').style.visibility = 'visible';
      if (dni.value.length === 0) {
        document.getElementById('dni-span').innerHTML = 'DNI Required';
      }
      else if (isNaN(dni.value)) {
        document.getElementById('dni-span').innerHTML = 'DNI must have only numbers';
      }
      else if (dni.value.length !== 7 || dni.value.length !== 8) {
        document.getElementById('dni-span').innerHTML = 'DNI must have between 7 and 8 numbers';
      }
    }
  }

  date.onfocus = function() {
    date.classList.add('border');
    date.classList.remove('correct', 'error');
    document.getElementById('date-span').style.visibility = 'hidden';
  }

  date.onblur = function() {
    if (isValidDate()) {
      date.classList.remove('border', 'error');
      date.classList.add('correct');
      document.getElementById('date-span').style.visibility = 'hidden';
    }
    else {
      date.classList.remove('border', 'correct');
      date.classList.add('error');
      document.getElementById('date-span').style.visibility = 'visible';
      var today = new Date();
      var dateImput = new Date(date.value);
      if (date.value === '') {
        document.getElementById('date-span').innerHTML = 'Date Required';
      }
      else if (dateImput > today) {
        document.getElementById('date-span').innerHTML = ' Date of birth must be before today';
      }
    }
  }

  phone.onfocus = function() {
    phone.classList.add('border');
    phone.classList.remove('correct', 'error');
    document.getElementById('phone-span').style.visibility = 'hidden';
  }

  phone.onblur = function() {
    if (isValidPhone()) {
      phone.classList.remove('border', 'error');
      phone.classList.add('correct');
      document.getElementById('phone-span').style.visibility = 'hidden';
    }
    else {
      phone.classList.remove('border', 'correct');
      phone.classList.add('error');
      document.getElementById('phone-span').style.visibility = 'visible';
      if (phone.value.length === 0) {
        document.getElementById('phone-span').innerHTML = 'Phone Required';
      }
      else if (isNaN(phone.value)) {
        document.getElementById('phone-span').innerHTML = 'Phone must have only numbers';
      }
      else if (phone.value.length !== 10) {
        document.getElementById('phone-span').innerHTML = 'Phone must have 10 numbers';
      }
    }
  }

  address.onfocus = function() {
    address.classList.add('border');
    address.classList.remove('correct', 'error');
    document.getElementById('address-span').style.visibility = 'hidden';
  }

  address.onblur = function() {
    if (isValidAddress()) {
      address.classList.remove('border', 'error');
      address.classList.add('correct');
      document.getElementById('address-span').style.visibility = 'hidden';
    }
    else {
      address.classList.remove('border', 'correct');
      address.classList.add('error');
      document.getElementById('address-span').style.visibility = 'visible';
      if (address.value.length === 0) {
        document.getElementById('address-span').innerHTML = 'Address Required';
      }
      else if (address.value.length < 3) {
        document.getElementById('address-span').innerHTML = 'Address must have more than 3 letters';
      }
      else {
        document.getElementById('address-span').innerHTML = 'Address must have only numbers and letters';
      }
    }
  }

  location.onfocus = function() {
    location.classList.add('border');
    location.classList.remove('correct', 'error');
    document.getElementById('location-span').style.visibility = 'hidden';
  }

  location.onblur = function() {
    if (isValidLocation()) {
      location.classList.remove('border', 'error');
      location.classList.add('correct');
      document.getElementById('location-span').style.visibility = 'hidden';
    }
    else {
      location.classList.remove('border', 'correct');
      location.classList.add('error');
      document.getElementById('location-span').style.visibility = 'visible';
      if (location.value.length < 1) {
        document.getElementById('location-span').innerHTML = 'Location Required';
      }
      else if (location.value.length < 3) { 
        document.getElementById('location-span').innerHTML = 'Location must have more than 3 letters';
      }
      else if (!isNaN(location.value)) {
        document.getElementById('location-span').innerHTML = 'Location must have only letters';
      }
    }
  }

  postalCode.onfocus = function() {
    postalCode.classList.add('border');
    postalCode.classList.remove('correct', 'error');
    document.getElementById('postal-span').style.visibility = 'hidden';
  }

  postalCode.onblur = function() {
    if (isValidPostal()) {
      postalCode.classList.remove('border', 'error');
      postalCode.classList.add('correct');
      document.getElementById('postal-span').style.visibility = 'hidden';
    }
    else {
      postalCode.classList.remove('border', 'correct');
      postalCode.classList.add('error');
      document.getElementById('postal-span').style.visibility = 'visible';
      if (postalCode.value.length === 0) {
        document.getElementById('postal-span').innerHTML = 'Zip Required';
      }
      else if (isNaN(postalCode.value)) {
        document.getElementById('postal-span').innerHTML = 'Zip must have only numbers';
      }
      else if (postalCode.value.length !== 4 || postalCode.value.length !== 5) {
        document.getElementById('postal-span').innerHTML = 'Zip must have between 4 and 5 numbers';
      }
    }
  }

  email.onfocus = function() {
    email.classList.add('border');
    email.classList.remove('correct', 'error');
    document.getElementById('email-span').style.visibility = 'hidden';;
  }

  email.onblur = function() {
    if (isValidEmail()) {
      email.classList.remove('border', 'error');
      email.classList.add('correct');
      document.getElementById('email-span').style.visibility = 'hidden';
    }
    else {
      email.classList.remove('border', 'correct');
      email.classList.add('error');
      document.getElementById('email-span').style.visibility = 'visible';
      if (email.value.length >= 1) { 
        document.getElementById('email-span').innerHTML = 'Email is not valid';
      }
    }
  }

  password.onfocus = function() {
    password.classList.add('border');
    password.classList.remove('correct', 'error');
    document.getElementById('password-span').style.visibility = 'hidden';
  }

  password.onblur = function() {
    if (isValidPassword()) {
      password.classList.remove('border', 'error');
      password.classList.add('correct');
      document.getElementById('password-span').style.visibility = 'hidden';
    }
    else {
      password.classList.remove('border-none', 'correct');
      password.classList.add('error');
      document.getElementById('password-span').style.visibility = 'visible';
      if (password.value.length === 0) {
        document.getElementById('password-span').innerHTML = 'Password Required';
      }
      else if (password.value.length < 8) {
        document.getElementById('password-span').innerHTML = 'Password must have more than 7 letters';
      } 
      else {
        document.getElementById('password-span').innerHTML = 'Password must have only letters and numbers';
      }
    }
  }

  repeatPassword.onfocus = function() {
    repeatPassword.classList.add('border');
    repeatPassword.classList.remove('correct', 'error');
    document.getElementById('repeat-password-span').style.visibility = 'hidden';
  }

  repeatPassword.onblur = function() {
    if (isValidRepeatPassword()) {
      if (repeatPassword.value === password.value) {
        repeatPassword.classList.remove('border', 'error');
        repeatPassword.classList.add('correct');
      }
    }
    else {
      repeatPassword.classList.remove('border-none', 'correct');
      repeatPassword.classList.add('error');
      document.getElementById('repeat-password-span').style.visibility = 'visible';
      if (repeatPassword.value === '') {
        document.getElementById('repeat-password-span').innerHTML = 'Repeat Password Required';
      }
      else if (repeatPassword.value !== password.value) {
        repeatPassword.classList.remove('border-none', 'correct');
        repeatPassword.classList.add('error');
        document.getElementById('repeat-password-span').innerHTML = 'Passwords do not match';
      }
    }
  }

  if (localStorage.length !==0) {
    name.value = localStorage.getItem('name');
    lastName.value = localStorage.getItem('last name');
    dni.value = localStorage.getItem('dni');
    date.value = localStorage.getItem('date of birth');
    phone.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    location.value = localStorage.getItem('location');
    postalCode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
  }


  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    var errorAlert = [];
    var error = false;

    if (!isValidName ()) {
      errorAlert.push('Invalid Name\n');
      error = true;
    }
    if (!isValidLastName ()) {
      errorAlert.push('Invalid Last Name\n');
      error = true;
    }
    if (!isValidDni ()) {
      errorAlert.push('Invalid DNI\n');
      error = true;
    }
    if (!isValidDate ()) {
      errorAlert.push('Invalid Date of Birth\n');
      error = true;
    }
    if (!isValidAddress()) {
      errorAlert.push('Invalid Address\n');
      error = true;
    }
    if (!isValidPhone()) {
      errorAlert.push('Invalid Phone\n');
      error = true;
    }
    if (!isValidLocation()) {
      errorAlert.push('Invalid Location\n');
      error = true;
    }
    if (!isValidPostal()) {
      errorAlert.push('Invalid Postal Code\n');
      error = true;
    }
    if (!isValidEmail()) {
      errorAlert.push('Invalid Email\n');
      error = true;
    }
    if (!isValidPassword()) {
      errorAlert.push('Invalid Password\n');
      error = true;
    } 
    if (!isValidRepeatPassword()) { 
      errorAlert.push('Invalid Repeat Password\n');
      error = true;
    } 
    if (error) {
      alert(errorAlert);
      return false;
    }

    var dobValue = date.value;
    var yyyy = date.value.substring(0,4);
    var mm = date.value.substring(5,7);
    var dd = date.value.substring(8,10);
    dobValue = mm + '/' + dd + '/' + yyyy;

    var queryParams = '?name=' + name.value + '&lastName=' + lastName.value + '&dni=' + dni.value + '&dob='
    + dobValue + '&phone=' + phone.value + '&address=' + address.value + '&city=' + location.value + '&zip='
    + postalCode.value + '&email=' + email.value + '&password=' + password.value;

    var paramsAlert = 'Name: ' + name.value + '\n' + 'Last Name: ' + lastName.value + '\n' + 'DNI: ' + dni.value +
     '\n' + 'Date of Birth: ' + dobValue + '\n' + 'Phone: ' + phone.value + '\n' + 'Address: ' + address.value +
     '\n' + 'Location: ' + location.value + '\n' + 'Postal Code: ' + postalCode.value + '\n' + 'Email: ' + email.value +
     '\n' + 'Password: ' + password.value;

    var resp;
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup' + queryParams;

    if (errorAlert.length === 0) {
      fetch(url)
      .then(function(response) {
        resp = response
        return(response.json());
      })
      .then(function(data) {
        if (data.success == true) {
          localStorage.setItem('name',name.value);
          localStorage.setItem('last name',lastName.value);
          localStorage.setItem('dni',dni.value);
          localStorage.setItem('date of birth',date.value);
          localStorage.setItem('phone',phone.value);
          localStorage.setItem('address',address.value);
          localStorage.setItem('location',location.value);
          localStorage.setItem('zip',postalCode.value);
          localStorage.setItem('email',email.value);
          localStorage.setItem('password',password.value);
          var dataString = JSON.stringify(data.msg)
          alert(dataString + '\n' + paramsAlert);
        }
        else {
          alert('Error: ' + data.msg + paramsAlert);
          if (resp.status < 200 || resp.status > 299) {
            throw new Error('Error' + data.msg)
          }
        }
      })
    }
    
  })

}


/*
    if (errorAlert.length === 0) {
      fetch(url)
      // .then(function(response) {
      //   if (response.status < 200 || response.status > 299) {
      //     throw new Error('Error')
      //   }
      //   return(response.json());
      // })
      .then(function(response) {
        return(response.json());
      })
      .then(function(data) {
        if(data.success == true) {
          // localStorage.setItem('name',name.value);
          // localStorage.setItem('last name',lastName.value);
          // localStorage.setItem('dni',dni.value);
          // localStorage.setItem('date of birth',date.value);
          // localStorage.setItem('phone',phone.value);
          // localStorage.setItem('address',address.value);
          // localStorage.setItem('location',location.value);
          // localStorage.setItem('zip',postalCode.value);
          // localStorage.setItem('email',email.value);
          // localStorage.setItem('password',password.value);

          var dataString = JSON.stringify(data.msg)
          alert(dataString + '\n' + paramsAlert);
        }
        else {
          var errorMessage = []
          for (var j=0; j<data.errors.length; j++) {
            errorMessage.push(data.errors[j].msg);
          }
          alert(errorMessage.join('\n'));
        }
        })
        .catch(function(error) {
          alert('Error: ' + '\n' + error);
        })
    }*/
