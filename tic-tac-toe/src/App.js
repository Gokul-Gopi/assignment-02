import { useState } from "react";
import "./index.css";
import { winningCombinations } from "./utils";
import { FaUndoAlt } from "react-icons/fa";

function App() {
  //default values of all the 9 cells are null
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isGameDrawn, setGameDrawn] = useState(false);

  // select hover effect style (class), based on the player's turn (X/O)
  const hoverEffectClass = xPlaying ? "x-turn" : "o-turn";

  //marks the cell with X or O
  const markCellWithValue = (cellIndex) => {
    //1. see which value (X/O) is to be marked in the cell according to the player's turn
    //2. map through all the cells and check for the one which was clicked by matching the cell-index
    //3. that particular cell is marked with the value (X/O), while others being null or the previous value
    const value = xPlaying ? "X" : "O";
    const udpatedCells = cells.map((e, idx) => (idx === cellIndex ? value : e));
    setCells(udpatedCells);

    //4. check if there is a winner
    //5. if no winner, check if it is a draw (all cells are not-empty) else set the winner
    const winner = checkForWinner(udpatedCells);
    if (!winner && udpatedCells.every((e) => e !== null)) {
      setGameDrawn(true);
    } else {
      setWinner(winner);
    }
  };

  //returns the winner if a winning condition is met
  const checkForWinner = (cells) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
        return xPlaying ? "X" : "O";
      }
    }
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setXPlaying(true);
    setWinner(false);
    setGameDrawn(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div
        className="board"
        style={{ pointerEvents: winner || isGameDrawn ? "none" : "initial" }}
      >
        {cells.map((cell, idx) => {
          return (
            <div
              key={`box${idx}`}
              // only show the hover effect if the cell is empty/null
              className={`cell ${!cell && hoverEffectClass}`}
              onClick={() => {
                //the conditiion make sures the value(X/O) is only added in an empty cell and not allowing overidding of value in a cell
                if (!cell) {
                  markCellWithValue(idx);
                  setXPlaying((preState) => !preState);
                }
              }}
            >
              {cell}
            </div>
          );
        })}
      </div>
      {winner && (
        <div className="result">
          <p>{winner} Won, Congrats!</p>
          <button onClick={resetGame}>
            <FaUndoAlt />
          </button>
        </div>
      )}
      {isGameDrawn && (
        <div className="result">
          <p>It's a draw</p>
          <button onClick={resetGame}>
            <FaUndoAlt />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
