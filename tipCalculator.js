document.querySelector('#tip-form').onchange = function () {

    // Get the values from the form
    var billTotal = Number(document.getElementById("billtotal").value);
    var personCount = Number(document.getElementById("headcount").value);
    var tip = document.getElementById("tipInput").value;

    //set some label ID's to clean code below
    var tipAmountLabel = document.getElementById("tipAmountLabel");
    var totalBillWithTipLabel = document.getElementById("totalBillWithTipLabel");

    // The code below will get the value of the range input
    // and display the percentage value to the user
    document.getElementById("tipOutput").innerHTML = `${tip}%`;

    // If the person count is less than 1 set it to 1, change the labels if person count is more than 1
    if (personCount <= 1) {
        personCount = 1
        tipAmountLabel.innerHTML = "Tip"
        totalBillWithTipLabel.innerHTML = "Bill and Tip"
        document.getElementById("headcount").value = personCount
    } else {
        tipAmountLabel.innerHTML = `Tip ÷ ${personCount}`
        totalBillWithTipLabel.innerHTML = `Bill and Tip ÷ ${personCount}`
    }

    // Equate the values given by user    
    var tipValue = billTotal * (tip / 100)

    var finalBill = billTotal + tipValue


    // Select the HTML elements within the results section
    var tipAmount = document.querySelector('#tipAmount');
    var totalBillWithTip = document.querySelector('#totalBillWithTip');

    // Set the selected elements values to the ones equated above this
    //  Divide the tip value by person count   
    tipAmount.value = (tipValue / personCount).toFixed(2);
    totalBillWithTip.value = (finalBill / personCount).toFixed(2);

    // Show the results once this code has ran
    document.getElementById("results").style.display = "block"
}