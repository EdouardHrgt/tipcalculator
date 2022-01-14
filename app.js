//Montant de l'addition
const billInput = document.querySelector("#bill-input");

let billInputValue = 0.0;

billInput.addEventListener("change", () => {
  billInputValue = parseFloat(billInput.value);
});

// Choix du pourboire
const tipAmount = document.querySelectorAll(".input-percent");
const tipsList = [0.05, 0.1, 0.15, 0.25, 0.5];
let tipChoice = 0;

tipAmount.forEach(function (tip, i) {
  tip.addEventListener("click", () => {
    tipChoice = tipsList[i];
  });
});

const customTip = document.querySelector("#custom-input");

customTip.addEventListener("change", () => {
  tipChoice = parseFloat(customTip.value / 100);
});

// Choix nombre de participants
const peopleInput = document.querySelector("#people-input");
const errMsg = document.querySelector(".error-msg");
let peopleNumber = 0;

peopleInput.addEventListener("change", () => {
  if (peopleInput.value <= 0) {
    errMsg.innerHTML = "Can't be zero";
  } else {
    peopleNumber = parseFloat(peopleInput.value);
    errMsg.innerHTML = "";
  }
});

//Affichage des résultats
const tipTotalDisplay = document.querySelector(".tip-result");
const tipPerPeopleDisplay = document.querySelector(".total-result");

function Totals() {
  let total = Math.round(billInputValue + (tipChoice * 100) / peopleNumber);
  console.log(total);
  tipPerPeopleDisplay.innerHTML = `$ ${total}`;
}
// Bouton reset
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  //location.reload();
  Totals();
});
