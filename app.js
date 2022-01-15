//Montant de l'addition
const billInput = document.querySelector("#bill-input");

let billInputValue = 0.0;

billInput.addEventListener("change", () => {
  const ErrMsg = document.querySelector("#bill-error");
  billInputValue = parseFloat(billInput.value);
  if (isNaN(billInputValue)) {
    ErrMsg.innerHTML = "Please use only numbers";
  } else if (billInputValue > 10000) {
    ErrMsg.innerHTML = "can't be more than 10.000$";
  } else {
    ErrMsg.innerHTML = "";
    totals();
  }
});

// Choix du pourboire
const tipAmount = document.querySelectorAll(".input-percent");
const tipsList = [1.05, 1.1, 1.15, 1.25, 1.5];
let tipChoice = 1.05;
const percentColor = document.querySelectorAll(".label-percent");

tipAmount.forEach(function (tip, i) {
  tip.addEventListener("click", () => {
    tipChoice = tipsList[i];
    if (percentColor[i].classList.contains("active")) {
      percentColor[i].classList.remove("active");
    } else {
      percentColor[i].classList.add("active");
    }

    totals();
  });
});

const customTip = document.querySelector("#custom-input");

customTip.addEventListener("change", () => {
  tipChoice = parseFloat(`1.${customTip.value}`);
  totals();
});

// Choix nombre de participants
const peopleInput = document.querySelector("#people-input");
let peopleNumber = 1;

peopleInput.addEventListener("change", () => {
  const ErrMsg = document.querySelector("#people-error");
  if (peopleInput.value <= 0) {
    ErrMsg.innerHTML = "Can't be zero";
  } else {
    peopleNumber = parseFloat(peopleInput.value);
    ErrMsg.innerHTML = "";
    totals();
  }
});

//Affichage des résultats
const tipDisplay = document.querySelector(".tip-result");
const totalDisplay = document.querySelector(".total-result");

function totals() {
  let total = Math.round((billInputValue * tipChoice) / peopleNumber);
  totalDisplay.innerHTML = `$ ${total}`;

  let tipPerPerson = Math.round(
    [billInputValue * tipChoice - billInputValue] / peopleNumber
  );
  tipDisplay.innerHTML = `$ ${tipPerPerson}`;
}

// Bouton reset
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  location.reload();
});
