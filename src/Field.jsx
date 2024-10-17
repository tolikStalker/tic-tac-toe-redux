import {Cell} from "./Cell.jsx";
import {endGame, gameTurn, newGame} from "./Actions.jsx";
import {useDispatch, useSelector} from "react-redux";

export function Field() {
    const dispatch = useDispatch();
    const combinations=useSelector((state) => state.winCombinations)
    const currentField=useSelector((state) => state.field)
    const isGameEnded=useSelector((state) => state.gameEnd)
    const isXTurn=useSelector((state) => state.xTurn)
    const turnNumber=useSelector((state) => state.turnNumber)

    const checkWin = (cells)=> combinations.some(([a,b,c])=>cells[a] && cells[a]===cells[b] && cells[a]===cells[c])

    const checkAvailable=(cell)=>!isGameEnded && currentField[cell] == null;

    const turn=(cell)=>{
        const newField=[...currentField];
        newField[cell]=isXTurn ? 'X' : 'O';
        dispatch(gameTurn(newField));

        const winner=checkWin(newField);
        if(winner || turnNumber>8) { // Победитель или ничья
            dispatch(endGame());
        }
    }

    const statusClass = isGameEnded
        ? isXTurn ? "o" : "x"
        : isXTurn ? "x" : "o";

    const gameStatus = turnNumber>8
        ? 'Ничья!'
        : isGameEnded
            ? `Победил ${isXTurn ? 'O' : 'X'}!`
            : `Следующий игрок: ${isXTurn ? 'X' : 'O'}`

    return (
        <>
            <button onClick={()=>dispatch(newGame())}>Новая игра</button>
            <div className={turnNumber>8 ? "" : statusClass}>
                { gameStatus }
            </div>
            <div className="field">
                {currentField.map((value, id) => {
                    return (<Cell key={id}
                                  xTurn={isXTurn}
                                  className={checkWin(id)}
                                  available={checkAvailable(id)}
                                  placeholder={currentField[id]}
                                  onClick={() => turn(id)}
                        />
                    )
                })
                }
            </div>
        </>
    )
}