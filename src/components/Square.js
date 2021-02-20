import React from 'react';

const Square = ({index,gameState, executor}) => {
    
       return (
    <>
        <div className={`x10 text-center game-square 
        `} onClick={e=>executor(index)}>
            {gameState[index].value}
        </div>
    </>
    );
};

export default Square;