let games = document.querySelector(".game");
let title = document.querySelector("h2");
let turn = "x";
let squares = [];
let tips = document.querySelectorAll(".square");

function over(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} Winner`;
  document.getElementById(`item${num1}`).style.background = "gray";
  document.getElementById(`item${num2}`).style.background = "gray";
  document.getElementById(`item${num3}`).style.background = "gray";
  setInterval(() => {
    title.innerHTML += ".";
    games.style.pointerEvents = "none";
    games.style.background = "dodgerblue";
    document.querySelectorAll(".square").background = "gray";
    games.classList.add("done");
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    over(1, 2, 3);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    over(4, 5, 6);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[9] != ""
  ) {
    over(7, 8, 9);
  }
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[7] != ""
  ) {
    over(1, 4, 7);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    over(2, 5, 8);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[9] != ""
  ) {
    over(3, 6, 9);
  }
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    over(1, 5, 9);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[5] != ""
  ) {
    over(3, 5, 7);
  }
}

function game(id) {
  let ele = document.getElementById(id);
  ele.classList.add("done");
  if (turn === "x" && ele.innerHTML === "") {
    ele.innerHTML += "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && ele.innerHTML === "") {
    ele.innerHTML += "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
}

// let tips = document.querySelectorAll('.cell');
// let isTie = true;

// for (let i = 0; i < tips.length; i++) {
//   if (!tips[i].textContent) {
//     isTie = false;
//     console.log("first");
//     break;
//   }
//   if (isTie) {
//     // alert("Game is a tie!");
//     console.log("Game is a tie!");
//   }
// }

let moves = 0;
function makeMove(cell) {
  // code to make a move
  moves++;
}
if (moves === 9 && !winner()) {
  alert("Game is a tie!");
}
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// // Another Solution

// // Get all the cells
// let cells = document.querySelectorAll(".cell");

// // Define the turn and the board state
// let turn = "x";
// let board = ["", "", "", "", "", "", "", "", ""];

// // Define the winning combinations
// let winCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// // Add click event listeners to each cell
// cells.forEach((cell, index) => {
//   cell.addEventListener("click", () => {
//     // Check if the cell is empty and the game is not over
//     if (board[index] === "" && !isGameOver()) {
//       // Mark the cell with the current turn
//       cell.textContent = turn;
//       cell.classList.add(turn);
//       // Update the board state
//       board[index] = turn;
//       // Check if the game is over
//       if (isGameOver()) {
//         // Display the result
//         alert(turn + " wins!");
//       } else {
//         // Switch the turn
//         turn = turn === "x" ? "o" : "x";
//       }
//     }
//   });
// });

// // Function to check if the game is over
// function isGameOver() {
//   // Loop through the winning combinations
//   for (let combo of winCombos) {
//     // Get the values of the board at the combo indices
//     let [a, b, c] = [board[combo[0]], board[combo[1]], board[combo[2]]];
//     // Check if they are all equal and not empty
//     if (a !== "" && a === b && b === c) {
//       // Return true if there is a winner
//       return true;
//     }
//   }
//   // Return false if there is no winner
//   return false;
// }
