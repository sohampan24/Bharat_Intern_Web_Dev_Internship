// JavaScript code for temperature conversion
document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celcius").querySelector("input");
    const fahrenheitInput = document.getElementById("fahrenheit").querySelector("input");
    const kelvinInput = document.getElementById("kelvin").querySelector("input");
    const convertButton = document.getElementById("convertButton");
    const clearButton = document.getElementById("clearButton");

    convertButton.addEventListener("click", function () {
        // Get the value from the Celsius input
        const celsiusValue = parseFloat(celsiusInput.value);

        // Check if the input is a valid number
        if (!isNaN(celsiusValue)) {
            // Convert Celsius to Fahrenheit and Kelvin
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            const kelvinValue = celsiusValue + 273.15;

            // Update the other input fields with the converted values
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
        } else {
            alert("Please enter a valid temperature in Celsius.");
        }
    });

    clearButton.addEventListener("click", function () {
        // Clear all input fields
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    });
});
