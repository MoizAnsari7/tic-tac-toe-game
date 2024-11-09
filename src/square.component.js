import React from "react";

const squareComponent = (props)=>{
    return (
        <div onClick={ props.selectHandle } style={ { display:"flex", width: "180px", height: "180px", justifyContent: "center", alignItems: "center",  border : "2px solid black"} }><p style={{  fontSize : "110px"}}>{props.value}</p></div>
    )
}

export default squareComponent;