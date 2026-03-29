 //YouTube Subscribe
      function subscribe() {
        const subscribeElement = document.querySelector(".js-subscribe-button");

        if (subscribeElement.innerText === "Subscribe") {
          subscribeElement.innerHTML = "Subscribed";
          subscribeElement.classList.add('is-subscribed');
        } else {
          subscribeElement.innerHTML = "Subscribe";
          subscribeElement.classList.remove('is-subscribed')
        }
      }

      //Amazon Shipping
      function costCalculate() {
        const inputElement = document.querySelector(".js-cost");
        let cost = Number(inputElement.value); //for void elements we use .value cause there is no innerHTML
        let finalCost = document.querySelector(".js-final-cost");
        if (cost <= 0 || isNaN(cost)) {
          finalCost.innerHTML = "Please enter valid price";
          finalCost.classList.add('invalid');
        } else if (cost < 40) {
          //when ever we get a value from the dom the value will be a string. to convert it to num we use Number()
          //to change a value to string we can use String()
          //if a str contains only num , it is converted to a num if we - * / . on the other hand + makes the num part a str
          //DON'T DO MATH USING NUM ALWAYS CHANGE TO NUM WHEN NEEDED
          //to counter the decimal problem we add the value in cents
          cost = (cost * 100 + 1000) / 100;
          finalCost.innerHTML = `$${cost}`;
          finalCost.classList.remove('invalid');
        } else {
          finalCost.innerHTML = `FREE shipping $${cost} only.`;
          finalCost.classList.remove('invalid');
        }
      }

      function costCalculateKeydown(event) {
        if (event.key === "Enter") {
          costCalculate();
        }
      }

      //coinchose
      function coinFlip(move) {
        document.querySelector(".js-move").innerHTML = `You chose: ${move}`;
      }

      //textbox
      function pickName() {
        const nameElement = document.querySelector(".js-name");
        document.querySelector(".js-display-name").innerHTML =
          `Your name is: ${nameElement.value}`;
      }

      function nameKeydown(event) {
        if (event.key === "Enter") {
          pickName();
        }
      }

      //Type
      function keyUp(event) {
        let typeElement = document.querySelector(".js-type");
        document.querySelector(".js-display-type").innerHTML =
          typeElement.value;
      }
      //if btn has spaces or new line around text  eg (..> xyx </..) it will not work
      //to resolve this we can use .innerText - it will give text of element w/o the spaces

      //WINDOW object
      //the window object represet the whole window of browser including popups, title, body etc.
      //window.document = document
      //window.console.log = console.log

      //exercises
      if(document.querySelector('.js-display-type').classList.contains('js-display-type')) {
        console.log(true);
      }

      function toggle(selector) {
        let btnElement = document.querySelector(selector);
        if (!btnElement.classList.contains('is-toggled')) {
           btnElement.classList.add('is-toggled');
        } else {
          btnElement.classList.remove('is-toggled');
        }
      }
      function toggle1(selector) {
        let btnElement = document.querySelector(selector);
        if (!btnElement.classList.contains('is-toggled')) {
          //this fn checks for toggled btn and closed them
          //we added fn before adding class so we can retain class for the current btn
           turnOffPreviousButton();
           btnElement.classList.add('is-toggled');
        } else {
          btnElement.classList.remove('is-toggled');
        }
      }

      function turnOffPreviousButton() {
        const previousButton = document.querySelector('.is-toggled');
        if (previousButton) {
          previousButton.classList.remove('is-toggled');
        }
      }
      


