/*script.js
* JavaScript for computing investment
* Pessie Mittelman
* 2/24/25 */

function getCompoundInterest() { 
    const initialAmount = parseFloat(document.getElementById("initialAmount").value); 
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const retirementYear = parseInt(document.getElementById("year").value);
    const time = retirementYear - 2025;
    const total = initialAmount * Math.pow ((1 + interestRate/100), time);

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    document.getElementById("retirementSavings").innerHTML = `${USDollar.format(total)}`;

    // Stops the form from submitting and refreshing 
    return false; 
}