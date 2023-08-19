
    function calculateFahrenheitToCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    function calculateCelsiusToFahrenheit(celsius) {
     
      return (celsius * 9) / 5 + 32;
    }


    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const exchange = document.getElementById("exchange");


    fahrenheitInput.addEventListener("input", function () {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      celsiusInput.value = calculateFahrenheitToCelsius(fahrenheitValue);

   
    });


    celsiusInput.addEventListener("input", function () {
      const celsiusValue = parseFloat(celsiusInput.value);
      fahrenheitInput.value = calculateCelsiusToFahrenheit(celsiusValue);

 
    });

    function formula(value) {
      const formula = document.getElementById("formula");
      if (isNaN(value)) {
        formula.innerHTML = `<span class="px-2 py-1 bg-red-500 text-white rounded-lg">Formula: (°F - 32) * 5/9 = °C</span>`;
      } else {
        formula.innerHTML = `<span class="px-2 py-1 bg-green-500 text-white rounded-lg">Formula: (${value}°F - 32) * 5/9 = ${calculateFahrenheitToCelsius(
          value
        ).toFixed(2)}°C</span>`;
      }
    }

    if (exchange) {
      exchange.addEventListener("click", function () {
        let fahrenheitValue = fahrenheitInput.value;
        let celsiusValue = celsiusInput.value;
        if (fahrenheitValue == "" && celsiusValue == "") {
          alert("Please enter a value");
        } else {
    
          exchange.classList.toggle("exchange");
          let fahrenheitValue = fahrenhei<tInput.value;
          let celsiusValue = celsiusInput.value;
          let temp = fahrenheitValue;
          celsiusValue = fahrenheitValue;
          fahrenheitInput.value = calculateCelsiusToFahrenheit(celsiusValue);
          celsiusInput.value = temp;
        }
      });
    }
