const cardHolderName = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("cardnumber");
const expiry1 =document.querySelector(".expiry1");
const expiry2 =document.querySelector(".expiry2");
const cvc = document.getElementById("CVC");
const submit = document.getElementById("submit");
const cardname = document.querySelector(".cardow");
const cardnum = document.querySelector(".cardn");
const exMM= document.querySelector(".cardmonth");
const exYY = document.querySelector(".cardday");
const cvcDisplay = document.querySelector(".cardcvc");
const thankU= document.getElementById("thankYou");
const thankUSec = document.getElementById("thanku");
const form = document.getElementById("myForm");
const contB = document.getElementById("continue");
const errex = document.getElementById("errorexpiry");

function inputName (){
    cardname.innerHTML= cardHolderName.value;
    thankU.innerHTML=`Thank You ${cardHolderName.value}`;
    if(cardname.innerHTML ==""){
        cardname.innerHTML = cardHolderName.placeholder;
    }
}
// function inputCardN() {
//     cardnum.innerHTML= cardNumber.value;
//     if (cardnum.innerHTML == ""){
//         cardnum.innerHTML cardNumber.placeholder;
//     }
// }
function inputNumber() {
  let cardNumberValue = cardNumber.value.replace(/\s+/g, "");
  let formattedCardNumber = cardNumberValue.substring(0, 16).replace(/(\d{4})/g, "$1 ").trim();
  cardnum.innerHTML = formattedCardNumber.length > 0 ? formattedCardNumber : cardNumber.placeholder;
}

  
  function inputMM() {
    let formattedMM = expiry1.value;
    formattedMM = formattedMM.substring(0, 2);
    expiry1.value = formattedMM;
    if (expiry1.value === "") {
      exMM.innerHTML = "00";
    } else {
      exMM.innerHTML = expiry1.value;
    }
  }
  function inputYY() {
    let formattedYY = expiry2.value;
    formattedYY = formattedYY.substring(0, 2);
    expiry2.value = formattedYY;
    if (expiry2.value === "") {
      exYY.innerHTML = "00";
    } else {
      exYY.innerHTML = expiry2.value;
    }
  }
  function inputCVC() {
    let formattedCvc = cvc.value;
  
    formattedCvc = formattedCvc.substring(0, 3);
    cvc.value = formattedCvc;
    if (cvc.value === "") {
      cvcDisplay.innerHTML = "000";
    } else {
      cvcDisplay.innerHTML = cvc.value;
    }
  }
  function validateCardNumber(event) {
    const input = event.target;
    const inputValue = input.value.replace(/\D/g, "").substring(0, 16);
    input.value = inputValue;
  
    const errorCardNumber = document.getElementById("errorCardN");
    if (input.value !== inputValue) {
      errorCardNumber.style.display = "block";
    } else {
      errorCardNumber.style.display = "none";
    }
  }
  