import React from "react";

const squareComponent = (props)=>(
    <div onClick={ props.selectHandle } className="box"><p style={{  fontSize : "110px"}}>{props.value}</p></div>
    // <div className="box"><p style={{ fontSize: "110px" }}>{props.value}</p></div>
    // <div  className="box"><p style={{  fontSize : "110px"}}>X</p></div>

)

export default squareComponent;