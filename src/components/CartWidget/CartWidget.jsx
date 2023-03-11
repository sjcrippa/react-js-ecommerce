import React from "react"
export const CartWidget = ({ cantCarrito }) => {
    return (
        <>
            <button className="btn btn-dark btnCart">Carrito</button>
            <p>{cantCarrito}</p>
        </>
    )
}