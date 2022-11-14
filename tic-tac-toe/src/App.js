import { useState } from "react";
import "./index.css";

import "./index.css";
import { winningCombinations } from "./utils";

function App() {
  //default values of all the 9 cells are null
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  // select hover effect style (class), based on the player's turn (X/O)
  const hoverEffectClass = xPlaying ? "x-turn" : "o-turn";

  //marks the cell with X or O
  const markCellWithValue = (cellIndex) => {
    //1. see which value (X/O) is to be marked in the cell according to the player's turn
    //2. map through all the cells and check for the one which was clicked by matching the cell-index
    //3. that particular cell is marked with the value (X/O), while others being null or the previous value
    const value = xPlaying ? "X" : "O";
    const udpatedCells = cells.map((e, idx) => (idx === cellIndex ? value : e));
    checkWhoWon(udpatedCells);
    setCells(udpatedCells);
  };

  const checkWhoWon = (cells) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      const [a, b, c] = combination;
      // console.log(a, b, c);
      // console.log("cells: " + cells[a], cells[b], cells[c]);
      if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
        console.log(xPlaying ? "X won" : "O won");
        break;
      }
    }
  };

  return (
    <div className="App">
      <div className="board">
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
    </div>
  );
}

export default App;
