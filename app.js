//?====================
//! Bill Input
//?====================

//* DOM Target Elements
const bill = document.querySelector('#bill-input');
//* User Choice
let billInputValue = 0.0;

bill.addEventListener('input', () => {

    if(bill.value.includes(',')){
        bill.value.replace(',', '.');
    }

    billInputValue = parseFloat(bill.value);

    console.log(billInputValue);
});

//================================================================

//?====================
//! Tip % selection 
//?====================
/*
const tipBtns = document.querySelectorAll('.label-percent');

tipBtns.forEach(btn =>{

    btn.addEventListener('click', () =>{
        tipBtns.forEach(btn => {
            btn.classList.remove('active');
        });

    if(event.target.innerHTML == btn.innerHTML){
        btn.classList.add('acttive');
    }    

    });
});
*/

//* DOM Target Elements
const fivePercent = document.querySelector('.p1');
const tenPercent = document.querySelector('.p2');
const fifteenPercent = document.querySelector('.p3');
const twentyFivePercent = document.querySelector('.p4');
const fiftyPercent = document.querySelector('.p5');
const customPercent = document.querySelector('.p6');

//* % list
const percentages = [1.05, 1.10, 1.15, 1.25, 1.50];

//* Input % choice
let percentageInput = 0.00; 

//! User percentage choice
function userPercentage(){

    //* Events listeners
    fivePercent.addEventListener('click', () =>{
        percentageInput = percentages[0]
        console.log(`Vous avez choisi ${percentageInput}.`);
        fivePercent.classList.toggle('active');
    });

    tenPercent.addEventListener('click', () =>{
        percentageInput = percentages[1]
        console.log(`Vous avez choisi ${percentageInput}.`);
        tenPercent.classList.add('active');
        
    });

    fifteenPercent.addEventListener('click', () =>{
        percentageInput = percentages[2]
        console.log(`Vous avez choisi ${percentageInput}.`);
        fifteenPercent.classList.add('active');
    });

    twentyFivePercent.addEventListener('click', () =>{
        percentageInput = percentages[3]
        console.log(`Vous avez choisi ${percentageInput}.`);
        twentyFivePercent.classList.add('active');
    });

    fiftyPercent.addEventListener('click', () =>{
        percentageInput = percentages[4]
        console.log(`Vous avez choisi ${percentageInput}.`);
        fiftyPercent.classList.add('active');
    });

    customPercent.addEventListener('click', () =>{
        console.log('Fonction non implémentée');
    });
}
userPercentage();

//================================================================

//?====================
//! People Number Input
//?====================

//* DOM Target Elements
const peopleNb = document.querySelector('#people-input');
const errorMsg = document.querySelector('.error-msg');

//* User Choice
let peopleNbInputValue = 1;

peopleNb.addEventListener('input', () => {
    peopleNbInputValue = parseFloat(peopleNb.value);
    console.log(peopleNbInputValue);
});



//================================================================

//?====================
//! Results
//?====================

//* DOM Target Elements
let tipAmount = document.querySelector('.tip-result');
let total = document.querySelector('.total-result');

// Tip Amount per Person
function tipResultCalculator(){
    tipAmount.addEventListener('click', ()=>{
        let tipResult = ((billInputValue * percentageInput - billInputValue) / peopleNbInputValue).toFixed(2);
        console.log(`Le résultat est de ${tipResult}`);
        const tipResultDisplay = tipAmount.innerHTML;
        tipAmount.innerHTML = `€ ${tipResult}`;
    });
};
tipResultCalculator()

// Total per Person
function totalResultCalculator(){
    total.addEventListener('click', ()=>{
        let totalResult = ((billInputValue * percentageInput) / peopleNbInputValue).toFixed(2);
        console.log(`Le résultat est de ${totalResult}`);
        const totalResultDisplay = total.innerHTML;
        total.innerHTML = `€ ${totalResult}`;
    });
};
totalResultCalculator();


//fonction globale qui check SI les values sont >0 