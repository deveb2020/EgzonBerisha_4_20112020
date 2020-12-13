//////////////////// NAVBAR /////////////////////////
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////// LAUNCH & CLOSE THE MODEL /////////////////////
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const myForme = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");

// launch modal 
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
   modalbg.style.display = "block";
}));
// close modal 
closeModal.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "none"; 
}));

    //DOM elements (Global Variables)
    let prenom = document.getElementById('first');
    let error = document.getElementById('error');
    let nom = document.getElementById('last');
    let error2 = document.getElementById('error2');
    let email = document.getElementById('email');
    let error3 = document.getElementById('error3');
    let birthdate = document.getElementById('birthdate');
    let error4 = document.getElementById('error4');
    let quantity = document.getElementById('quantity');
    let error5 = document.getElementById('error5');
    let citySelector = document.getElementsByName("location");
    let errorCity = document.getElementById('errorCity');
    let termsCheckbox = document.getElementById('termsChecked');
    let errorCheckbox = document.getElementById('errorCheckbox');
    let succesMessage = document.getElementById('confirmation-message');


//////////////////// FORM VALIDATION //////////////////////
function validate() {   

    //Functions stored inside a variable with arguments inside
    let prenomOk = validateString(prenom.value, 2, error,"Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
    let nomOk = validateString(nom.value, 2, error2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    let emailOk = checkEmail(email.value, error3, "Veuillez entre votre adresse mail!");
    let birthdateOk = validateString(birthdate.value, 2, error4, "Vous devez entrer votre date de naissance.");
    let quantityOk = validateString(quantity.value, 1, error5, "Veuillez entrer une valeur");
    let citySelectorOk = citySelectorFunction();
    let termsAndConditionsOK = termsAndConditions(termsCheckbox, errorCheckbox, "Vous devez vérifier que vous acceptez les termes et conditions.");
    // Function Called Here    
    if(prenomOk && nomOk && emailOk && birthdateOk && quantityOk && citySelectorOk && termsAndConditionsOK ) {} 
    return false;
}

//Validate Prenom & Nom & Birthdate & Tournes
function validateString(entry, size, errorElt, errorMessage) {
    if ( entry.length < size ) {
        errorElt.innerHTML = errorMessage;
        errorElt.style.color = "red";
        errorElt.style.fontSize = "1rem";
        return false;
    }else {
        errorElt.innerHTML = " ";
        return true;
     }
}

////// Validate EMAIL /////// 
function checkEmail(email, errorElt, errorMessage ) {
   let patern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if (!email.match(patern) || email == '') {
       errorElt.innerHTML = errorMessage;
       errorElt.style.color = "red";
       errorElt.style.fontSize = "1rem";
       return false;
   }else {
       errorElt.innerHTML = "";
       return true;
   }
}

////// Validate City selector ///////
function citySelectorFunction() {
      let check1 = false;
      for(i=0; i<citySelector.length; i++) {
   if (citySelector[i].checked) {
      check1 = true;
   }
   }
   if (check1 == false) {
        errorCity.innerHTML = "Vous devez choisir une option.";
        errorCity.style.color = "red";
        errorCity.style.fontSize = "1rem";
        return false;
   }else {
        errorCity.innerHTML = " ";
        return true;
   }
}

//////// Validate Terms and Conditions //////
function termsAndConditions(checkboxTerms, errorElementSelect, errorMessage ) {
  if(!checkboxTerms.checked) {
        errorElementSelect.innerHTML = errorMessage;
        errorElementSelect.style.color = "red";
        errorElementSelect.style.fontSize = "1rem";
        return false;
  }
       errorElementSelect.innerHTML = "";
       return true;
}
/////////////////// OPEN THE SUCCES MESSAGE BOX  ////////////////////////




////////////////// CLOSE THE SUCCES MESSAGE BOX //////////////////////////
//call addEventListener on multiple elements at the same time using a LOOP
document.querySelectorAll('.close-Succes').forEach(button =>{
button.addEventListener('click', button => {
if (succesMessage.style.display === "block"){
      succesMessage.style.display = 'none';
}else{
      succesMessage.style.display = 'none';
}
})});