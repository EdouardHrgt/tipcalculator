//Montant de l'addition
const billInput = document.querySelector('#bill-input');

let billInputValue = 0.0;

billInput.addEventListener('change', () => {
    const ErrMsg = document.querySelector('#bill-error');
    billInputValue = parseFloat(billInput.value);
    if (isNaN(billInputValue)) {
        ErrMsg.innerHTML = 'Please use only numbers';
    } else if (billInputValue > 10000) {
        ErrMsg.innerHTML = "can't be more than 10.000$";
    } else {
        ErrMsg.innerHTML = '';
        totals();
    }
});

// Choix du pourboire
const tipAmount = document.querySelectorAll('.input-percent');
const tipsList = [0.05, 0.1, 0.15, 0.25, 0.5];
let tipChoice = 0.05;
const percentColor = document.querySelectorAll('.label-percent');
const customTip = document.querySelector('#custom-input');

function deleteActive() {
    tipAmount.forEach(function (tipActive, k) {
        if (percentColor[k].classList.contains('active')) {
            percentColor[k].classList.remove('active');
        }
    });
    customTip.classList.remove('active');
}

tipAmount.forEach(function (tip, i) {
    tip.addEventListener('click', () => {
        tipChoice = tipsList[i];
        deleteActive();
        percentColor[i].classList.add('active');
        totals();
    });
});

customTip.addEventListener('change', () => {
    tipChoice = parseFloat(customTip.value / 100);
    deleteActive();
    customTip.classList.add('active');
    totals();
});

// Choix nombre de participants
const peopleInput = document.querySelector('#people-input');
let peopleNumber = 1;

peopleInput.addEventListener('change', () => {
    const ErrMsg = document.querySelector('#people-error');
    if (peopleInput.value <= 0) {
        ErrMsg.innerHTML = "Can't be zero";
    } else {
        peopleNumber = parseFloat(peopleInput.value);
        ErrMsg.innerHTML = '';
        totals();
    }
});

//Affichage des résultats
const tipDisplay = document.querySelector('.tip-result');
const totalDisplay = document.querySelector('.total-result');

function totals() {
    let total = Math.round((billInputValue * (1 + tipChoice)) / peopleNumber);
    totalDisplay.innerHTML = `$ ${total}`;

    let tipPerPerson = Math.round((billInputValue * tipChoice) / peopleNumber);
    tipDisplay.innerHTML = `$ ${tipPerPerson}`;
}

// Bouton reset
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
    location.reload();
});
