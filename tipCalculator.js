document.querySelector('#tip-form').onchange = function(){

    // Get the values from the form
   var billTotal = Number(document.getElementById("billtotal").value);
   var personCount = Number(document.getElementById("headcount").value);
   var tip = document.getElementById("tipInput").value; 
   
   // The code below will get the value of the range input
    // and display the percentage value to the user
   document.getElementById("tipOutput").innerHTML = `${tip}%`;

    if (personCount <= 0) {
        personCount = 1
    }

    // Equate the values given by user    
   var tipValue = billTotal * (tip/100)

   var finalBill = billTotal + tipValue
   

   console.log(finalBill)

    // Select the HTML elements within the results section
   var tipAmount = document.querySelector('#tipAmount');
   var totalBillWithTip = document.querySelector('#totalBillWithTip');

    // Set the selected elements values to the ones equated above this
    //  Divide the tip value by person count   
   tipAmount.value = (tipValue / personCount).toFixed(2);
   totalBillWithTip.value = finalBill.toFixed(2);

   console.log("£" + tipAmount)

    // Show the results once this code has ran
    document.getElementById("results").style.display="block"
}