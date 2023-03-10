import React from "react";

export const BtnComponent = ({clickEvent, label}) => {

    return ( 
        <button className="btn" onClick={clickEvent}>{label}</button>
    )
    
};
