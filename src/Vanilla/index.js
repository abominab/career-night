let isXTurn = true;

function init() {
  isGameOver = false;
  firstMark = 'X';
  document.querySelector('.game-over').style.setProperty('display', 'none');
  console.log('%c init:', 'color:cyan', {});

  // reset the gameboard
  const marks = Array.from(document.querySelectorAll('.board-space')).map(
    (space) => (space.innerHTML = '')
  );
}
init();

function changePlayerName(event, playerNumber, playerName) {
  document
    .querySelectorAll('.player-info')
    [playerNumber - 1].querySelector('span').innerHTML = playerName;
  const inputs = document.querySelectorAll('input');
  console.log('%c DEBUG:', 'color:orange;font-weight:bold;', { event });
}

function changeTurn() {
  isXTurn = !isXTurn;
}

function takeTurn(event) {
  event.target.innerHTML = isXTurn ? 'X' : 'O';
  changeTurn();
  checkForWin();
}

function checkForWin() {
  const marks = Array.from(document.querySelectorAll('.board-space')).map(
    ({ innerHTML }) => innerHTML
  );

  if (!marks.includes('X') && !marks.includes('O')) {
    return isGameOver;
  }

  let winningCase = null;

  if (marks[0] === marks[1] && marks[1] === marks[2] && marks[1] !== '') {
    isGameOver = true;
    winningCase = 0;
  } else if (
    marks[0] === marks[3] &&
    marks[3] === marks[6] &&
    marks[3] !== ''
  ) {
    isGameOver = true;
    winningCase = 1;
  } else if (
    marks[6] === marks[7] &&
    marks[7] === marks[8] &&
    marks[7] !== ''
  ) {
    isGameOver = true;
    winningCase = 2;
  } else if (
    marks[2] === marks[5] &&
    marks[5] === marks[8] &&
    marks[5] !== ''
  ) {
    isGameOver = true;
    winningCase = 3;
  } else if (marks[4] !== '') {
    if (marks[3] === marks[4] && marks[4] === marks[5]) {
      isGameOver = true;
      winningCase = 4;
    } else if (marks[1] === marks[4] && marks[4] === marks[7]) {
      isGameOver = true;
      winningCase = 5;
    } else if (marks[2] === marks[4] && marks[4] === marks[6]) {
      isGameOver = true;
      winningCase = 6;
    } else if (marks[0] === marks[4] && marks[4] === marks[8]) {
      isGameOver = true;
      winningCase = 7;
    }
  }

  const gameOverElement = document.querySelector('.game-over');
  if (!isGameOver && !marks.includes('')) {
    gameOverElement.style.setProperty('display', 'revert');
    gameOverElement.innerHTML = 'Draw Game';
  }

  if (isGameOver) {
    console.log('%c gameOver:', 'color:tomato', { marks, winningCase });
    gameOverElement.style.setProperty('display', 'revert');
    gameOverElement.innerHTML = 'Winner!';
  }
}
