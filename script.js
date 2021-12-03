const gameBoard = (() => {
  const _buttons = document.querySelectorAll("button");
  const _gameBoardGrid = Array.from(_buttons);

  function _buttonClicked() {
    if (gameLogic.checkWin() === true && this.textContent === "") {
      const buttonID = this.dataset.id;
      const turn = gameLogic.getTurn();
      setGrid(turn, buttonID);
    }
  }

  const setGrid = (playerType, gridIndex) => {
    _gameBoardGrid[gridIndex].textContent = playerType;
    gameLogic.changeTurn();
    gameLogic.checkWin();
  };

  const getGrid = () => {
    return _gameBoardGrid;
  };

  _buttons.forEach((button) =>
    button.addEventListener("click", _buttonClicked)
  );

  return { setGrid, getGrid };
})();

const playerFactory = (type) => {
  return { type };
};

const player1 = playerFactory("X");
const player2 = playerFactory("O");

const gameLogic = (() => {
  let _turn = player1.type;
  const _turnDisplay = document.querySelector("#turn");
  _turnDisplay.textContent = `Current turn: ${_turn}`;
  const winDisplay = document.querySelector("#win");

  const changeTurn = () => {
    if (_turn === player1.type) {
      _turn = player2.type;
    } else {
      _turn = player1.type;
    }
    _turnDisplay.textContent = `Current turn: ${_turn}`;
  };

  const getTurn = () => {
    return _turn;
  };

  const _player1Win = () => {
    winDisplay.textContent = `Player ${player1.type} wins!`;
  };

  const _player2Win = () => {
    winDisplay.textContent = `Player ${player2.type} wins!`;
  };

  const _draw = () => {
    winDisplay.textContent = `Draw!`;
  };

  const checkWin = () => {
    const grid = gameBoard.getGrid();
    if (
      grid[0].textContent === player1.type &&
      grid[1].textContent === player1.type &&
      grid[2].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[3].textContent === player1.type &&
      grid[4].textContent === player1.type &&
      grid[5].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[6].textContent === player1.type &&
      grid[7].textContent === player1.type &&
      grid[8].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[0].textContent === player1.type &&
      grid[3].textContent === player1.type &&
      grid[6].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[1].textContent === player1.type &&
      grid[4].textContent === player1.type &&
      grid[7].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[2].textContent === player1.type &&
      grid[5].textContent === player1.type &&
      grid[8].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[0].textContent === player1.type &&
      grid[4].textContent === player1.type &&
      grid[8].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[2].textContent === player1.type &&
      grid[4].textContent === player1.type &&
      grid[6].textContent === player1.type
    ) {
      _player1Win();
      return false;
    }
    if (
      grid[0].textContent === player2.type &&
      grid[1].textContent === player2.type &&
      grid[2].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[3].textContent === player2.type &&
      grid[4].textContent === player2.type &&
      grid[5].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[6].textContent === player2.type &&
      grid[7].textContent === player2.type &&
      grid[8].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[0].textContent === player2.type &&
      grid[3].textContent === player2.type &&
      grid[6].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[1].textContent === player2.type &&
      grid[4].textContent === player2.type &&
      grid[7].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[2].textContent === player2.type &&
      grid[5].textContent === player2.type &&
      grid[8].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[0].textContent === player2.type &&
      grid[4].textContent === player2.type &&
      grid[8].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (
      grid[2].textContent === player2.type &&
      grid[4].textContent === player2.type &&
      grid[6].textContent === player2.type
    ) {
      _player2Win();
      return false;
    }
    if (grid.every((button) => button.textContent !== "")) {
      _draw();
      return false;
    }
    return true;
  };

  return { changeTurn, getTurn, checkWin };
})();
