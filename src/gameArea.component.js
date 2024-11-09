import React, {  useState } from "react";
import Square from "./square.component"
const GameAreaComponent = ()=>{
    const [ num , setNum ] = useState([ Array(9).fill(null) ])
    const [ turn , setTurn ] = useState( "X")
    
    console.log(num);
    const handleClick = (squareIndex )=>{
        console.log(`clicked square index is ${ squareIndex }`)
        //change square box value according to player turn.
        let newArr = [ ...num ];
        //Set value of current turn player in array
        newArr[ squareIndex ] = turn;
        setNum( newArr )
        setTurn( ( turn === "X" ) ? "O" : "X" )
    }
    return (
        <>
            <div >
                <h2> { turn } : Your Turn </h2>
                <div style={{  display : "flex", justifyContent: "cnenter", alignItems : "center" }} className="row">
                    <Square value={num[0]} selectHandle={ ()=>{ handleClick(0)}}/>
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
        </>
    )
}

export default GameAreaComponent;