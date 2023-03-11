import React from "react"
export const CartWidget = ({ cantCarrito }) => {
    return (
        <>
            <button className="btn"><i className="fa-solid fa-cart-shopping"></i>
            <p>{cantCarrito}</p>
            </button>
            
        </>
    )
}