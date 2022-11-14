import { FaUndoAlt } from "react-icons/fa";

export const Cell = ({
  index,
  xPlaying,
  value,
  markCellWithValue,
  setXPlaying,
}) => {
  // select hover effect style (class), based on the player's turn (X/O)
  const hoverEffectClass = xPlaying ? "x-turn" : "o-turn";

  return (
    <div
      // only show the hover effect if the cell is empty/null
      className={`cell ${!value && hoverEffectClass}`}
      onClick={() => {
        //the conditiion make sures the value(X/O) is only added in an empty cell and not allowing overidding of value in a cell
        if (!value) {
          markCellWithValue(index);
          setXPlaying((preState) => !preState);
        }
      }}
    >
      {value}
    </div>
  );
};

export const Result = ({ message, resetCallback }) => {
  return (
    <div className="result">
      <p>{message}</p>
      <button onClick={resetCallback}>
        <FaUndoAlt />
      </button>
    </div>
  );
};
