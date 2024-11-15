import React, {  useEffect, useState } from "react";
import Square from "./square.component"
const GameAreaComponent = ()=>{
    const [ num , setNum ] = useState([ Array(9).fill(null) ])
    const [ turn , setTurn ] = useState( "X")

    const WinnerConditions = [
        //verical
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //horizontal
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //diagonal
        [0,4,8],
        [2,4,6],
    ]
    const [ Winner, setWinner ] = useState(null);
    
    useEffect(()=>{
        console.log("latest array is", num);
        checkWinner()
        
    },[ num ])
    const handleClick = (squareIndex )=>{
        console.log(`clicked square index is ${ squareIndex }`)
        //change square box value according to player turn.
        let newArr = [ ...num ];
        //Set value of current turn player in array
        newArr[ squareIndex ] = turn;
        setNum( newArr )
        
        setTurn( ( turn === "X" ) ? "O" : "X" )
        
    }

    const checkWinner = ()=>{
        for(let i = 0; i < WinnerConditions.length; i++)
        {
            console.log(  WinnerConditions[i], num[WinnerConditions[i][0]], num[WinnerConditions[i][1]], num[WinnerConditions[i][2]])
            if( num[WinnerConditions[i][0]]  != null &&   num[WinnerConditions[i][1]]  != null &&  num[WinnerConditions[i][2]]  != null)
            {
                if(num[WinnerConditions[i][0]] == num[WinnerConditions[i][1]] && num[WinnerConditions[i][0]] == num[WinnerConditions[i][1]])
                {
                console.log("matched", WinnerConditions[i]);
                console.log(`Player ${ num[WinnerConditions[i][0]] } is winner`);
                setWinner(`Player ${ num[WinnerConditions[i][0]] } is winner`)
                }
            }
        }
    }

    const handleReset = ()=>{
        setNum([ ...Array(9).fill(null) ])
    }
    return (
        <>{ ( Winner ) ? ( <h1>{ Winner }</h1> ) : (
            <div >
                <button onClick={handleReset}>Reset Game</button>
                <h2> { turn } : Your Turn </h2>
                <div className="row">
                    <Square value={num[0]} selectHandle={ ()=>{ handleClick(0)}} />
                    <Square value={num[1]} selectHandle={ ()=>{ handleClick(1)}} />
                    <Square value={num[2]} selectHandle={ ()=>{ handleClick(2)}} />
                </div>
                <div style={{  display : "flex", justifyContent: "cnenter", alignItems : "center" }} className="row">
                    <Square value={num[3]} selectHandle={ ()=>{ handleClick(3)}} />
                    <Square value={num[4]} selectHandle={ ()=>{ handleClick(4)}} />
                    <Square value={num[5]} selectHandle={ ()=>{ handleClick(5)}} />
                </div>
                <div style={{  display : "flex", justifyContent: "cnenter", alignItems : "center" }} className="row">
                    <Square value={num[6]} selectHandle={ ()=>{ handleClick(6)}} />
                    <Square value={num[7]} selectHandle={ ()=>{ handleClick(7)}} />
                    <Square value={num[8]} selectHandle={ ()=>{ handleClick(8)}} />
                </div>
            </div>
        )}
        </>
    )
}

export default GameAreaComponent;