window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  let values = {amount: 10000, years: 10, rate: 4.5}
  let amount = (document.querySelector("#loan-amount").value);
  let years = (document.querySelector("#loan-years").value);
  let rate = (document.querySelector("#loan-rate").value);
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
  }

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let rate = (values.rate / 100) / 12;
    let n = Math.floor(values.years * 12);
    return (
      (rate * values.amount) / 
      (1 - Math.pow((1 + rate), -n))
    ).toFixed(2);
    }

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let result = document.getElementById("monthly-payment");
  result.innerText = "$" + monthly;
}
