let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      }; // we used a default value cause after resets the score object becomes null so we give a default value to it
      updateScore();
      /*
      if (!score) {
      wins: 0,
      losses: 0, // sp instead deafault we can use this code
      ties: 0
      };
      */
      function pickComputerMove() {
        const randomNum = Math.random();

        if (randomNum >= 0 && randomNum < 1 / 3) {
          return "rock";
        } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
          return "paper";
        } else if (randomNum >= 2 / 3 && randomNum < 1) {
          return "scissors";
        }
      }

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = "";

        if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You win!";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win!";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose.";
          }
        } else if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
          } else if (computerMove === "paper") {
            result = "You win!";
          } else if (computerMove === "scissors") {
            result = "Tie.";
          }
        }

        if (result === "You win!") {
          score.wins += 1;
        } else if (result === "You lose.") {
          score.losses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        updateScore();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(".js-moves").innerHTML =
          `You <img class="move-icon" src="images/${playerMove}-emoji.png" /> <img class="move-icon" src="images/${computerMove}-emoji.png" /> Computer `;
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem("score");
        updateScore();
        document.querySelector(".js-result").innerHTML = "";
        document.querySelector(".js-moves").innerHTML = "";
      }

      function updateScore() {
        document.querySelector(".js-score").innerHTML =
          `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
      }