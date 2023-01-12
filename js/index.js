document.getElementById('calculateButton').addEventListener('click', function() {

let  friendSum = calculatedTotal();

showDividedSum(friendSum);
document.getElementById('showSum').classList.toggle('hide');
document.getElementById('inputForm').classList.toggle('hide');

 // Logs for debugging
// console.log('friendSum ', friendSum);
// console.log('total ', total);
// console.log('numberOfFriends ', numberOfFriends);
// console.log('calculatedTip ', calculatedTip);
// console.log('tip ', tip); 
});


//------ To-do-list -------

// calculating the total tip amount 
function calculateTip(sum, tip) {
return sum * tip;
}

// calculating the divided total amount
function divideTotal(total, numberOfFriends) {
const sumDivided = total / numberOfFriends;
return sumDivided;
}

function calculatedTotal() {
// retrieves what was written in the input field with ID sum

const sum = document.getElementById('sum').value;
// retrieves what was written in the input field with ID tip

const tip = document.getElementById('tip').value;
// retrieves what was written in the input field with ID numberOfFriends

const numberOfFriends = document.getElementById('numberOfFriends').value;

let total; 
// const calculatedTip = calculateTip(sum, tip);
// parseInt is converting strings to a number to get the result correct
if(tip == ''){
    total = parseInt(sum);
}else {
    total = parseInt(sum) + parseInt(tip);
}
     
const totalDivided = divideTotal(total, numberOfFriends); 

return totalDivided.toString(); 
}

if(tip == ''){
    total = parseInt(sum);
// checks if the tip input field has no value, If tip does not have a value, the total without tip is shown

}else {
    total = parseInt(sum) + parseInt(tip);
}

// shows the final amount to pay per person. If no value/or wrong value is added error message appears.
function showDividedSum(sum) {
       
if(sum !== 'NaN'){
    document.getElementById('friendSum').innerHTML = sum + ' kr per person';
}else {
    document.getElementById('friendSum').innerHTML = 'Vänligen fyll i belopp, antal personer och dricks!';
}
}