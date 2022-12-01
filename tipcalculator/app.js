const calc = document.getElementById("calculate");
const bill = document.getElementById("bill-amount");
const tipPercent = document.getElementById("percent-amount");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("bill-total");

calc.addEventListener("click", () => {
  tipAmount.value = (bill.value / 100) * tipPercent.value;
  total.value = parseFloat(tipAmount.value) + parseFloat(bill.value);
});


