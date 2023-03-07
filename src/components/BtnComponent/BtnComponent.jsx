import React from "react";

export const BtnComponent = ({clickEvent, label}) => {

    return ( 
        <button onClick={clickEvent}>{label}</button>
    )
    
};
