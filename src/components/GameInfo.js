import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GameInfo({ gameBoard, nextTurn, winner, resetGameBoard }) {
  React.useEffect(() => {
    if (winner) {
      toast.success(winner + " wins!!");
    } else if (!winner && !gameBoard.includes(null)) {
      toast.info("Game Tied!!");
    } else {
      toast.info("Current Move: " + (nextTurn ? "Sphere" : "Cube"));
    }
  }, [gameBoard, nextTurn, winner]);

  return (
    <>
      <div class="title">
        <h1>Tic-Tac-Toe in 3D</h1>
      </div>
      <div className='textBottomSection'>
        {/* <div className='winnerMove'>
          {
            winner
              ? winner + " wins!!"
              : !winner && !gameBoard.includes(null)
                ? "Game Tied!!"
                : "Current Move: " + (nextTurn ? "Sphere" : "Cube")
          }
        </div> */}

        <div onClick={resetGameBoard}>
          {
            gameBoard.every(x => x === null)
              ? null
              :
              <span className='reset-btn'>RESET</span>
          }
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default React.memo(GameInfo);
