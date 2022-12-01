const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", () => {
  fahrenheit.value = (celsius.value * 9) / 5 + 32;
});
