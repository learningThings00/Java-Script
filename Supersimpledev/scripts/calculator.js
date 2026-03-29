let calculation = localStorage.getItem("calculation") || "";
      const calculateElement = document.querySelector(".js-display");
      function calc(value) {
        calculation += value;
        calculateElement.innerHTML = calculation;
        localStorage.setItem("calculation", calculation);
      }

      function calculate() {
        calculation = eval(calculation);
        calculateElement.innerHTML = calculation;
      }

      function reset() {
        calculation = "";
        calculateElement.innerHTML = calculation;
        localStorage.removeItem("calculation");
      }
      calculateElement.innerHTML = calculation;