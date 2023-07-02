const boxs = document.querySelectorAll(".item-box");
const retryBtn = document.querySelector("#retry-btn");

const winPossibility = ["012", "345", "678", "036", "147", "258", "048", "246"];
let playerMove = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "x";

function setPlayer(index) {
  playerMove[index] = currentPlayer;
}

function changePlayer() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}

function drawPlayerMove(box) {
  const p = document.createElement("p");
  p.textContent = currentPlayer;
  p.style.color = "#000";
  box.appendChild(p);
}

function checkWin() {
  let win = false;
  winPossibility.forEach(function (posibility) {
    if (!win) {
      const check0 = playerMove[Number(posibility[0])];
      const check1 = playerMove[Number(posibility[1])];
      const check2 = playerMove[Number(posibility[2])];
      if (check0 === check1 && check1 === check2 && check0 !== "") {
        console.log("TEST");
        win = true;
      }
    }
  });
  return win;
}

function drawer() {
  boxs.forEach(function (box, index) {
    box.addEventListener("click", () => {
      if (!box.hasChildNodes()) {
        drawPlayerMove(box);
        setPlayer(index);
        const win = checkWin();
        if (win) {
          retryBtn.style.display = "inline-block";
        } else {
          changePlayer();
        }
      }
    });
  });
}

drawer();
