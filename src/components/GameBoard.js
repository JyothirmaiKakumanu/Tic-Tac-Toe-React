import React, { useState } from 'react';
import Square from './Square';

const GameBoard = () => {
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const emptyGame=[
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
    ] 

    const [gameState, setGameState] = useState(emptyGame);

    const [moves,setMoves] = useState(0);
    const [winMsg, setWinMsg] = useState("");

    console.table(gameState);
    const executeMove = index=>{
       
        //check win or draw
        let newGameState = gameState;
        // console.log(newGameState[index]);
        if(newGameState[index].value===null){
            newGameState[index].value= currentPlayer;
            setGameState(newGameState);
            checkWinorDraw();
            let nextPlayer = currentPlayer=="X"?"O":"X";
        
        setCurrentPlayer(nextPlayer);
        
        }
              
        let moveNumber = moves+1;
        setMoves(moveNumber);
        if(moveNumber==9){
            // alert(`Game is draw`);
            setWinMsg(`Draw!`);
        }
        
        
    }


    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    

    const checkWinorDraw=()=>{
        let win = false;
        
        for(let i=0; i<winningConditions.length;i++){
            const winCondition = winningConditions[i];
            console.log(winCondition);
            console.log("value a"+gameState[winCondition[0]]);
            let a = gameState[winCondition[0]].value; //a -> 0
            let b = gameState[winCondition[1]].value; //b -> 0
            let c = gameState[winCondition[2]].value; //c-> 0
            console.log("a"+a);
            console.log("b"+b);
            console.log("c"+c);
            if (a === "" || b === "" || c === "") 
            continue;
            if (a === b && b === c) {
                console.log("inside if");
                win = true;
                break;
              }
              console.log("line100"+win);
              
        }
        
        console.log("line108"+win);
              if(win!==false){
                  console.log("win msg");
                  setWinMsg(`${currentPlayer} wins`);
                return;
            }
        
      
    }

    return (
    <>
        <div className="col-md-12 col-12 text-center">
            <h2>Current Player : {currentPlayer}</h2>
            <button onClick={e=>{setGameState(emptyGame);
            setCurrentPlayer("X");
            }}>Restart</button>
        </div>
        <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
            {gameState.map((square, key)=>(
                <Square key={key} gameState={gameState} index={key} executor={executeMove}/>
            ))}
        </div>
        <p className="message text-center">
            {winMsg}
        </p>
    </>
    );
};

export default GameBoard;