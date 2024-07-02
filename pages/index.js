import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(calculateWinner(newBoard));
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => (
    <button
      className="w-24 h-24 border border-gray-300 text-2xl font-bold flex items-center justify-center hover:bg-gray-800"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-1">
        {board.map((_, i) => renderSquare(i))}
      </div>
      {winner && (
        <div className="mt-4 text-2xl font-bold">
          {winner} Wins!
        </div>
      )}
      <button
        className="mt-4 px-4 font-bold text-lg py-1 bg-blue-500 text-white rounded"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setIsXNext(true);
          setWinner(null);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
