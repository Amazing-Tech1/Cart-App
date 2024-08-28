import React, { useContext } from 'react'
import { CartContext } from './Feature/ContextProvider'


function CartProduct({ product, isOdd }) {
    const { cart, dispatch } = useContext(CartContext)
    function Increase(id) {
        const index = cart.findIndex(p => p.id === id)
        if (cart[index].quantity < 10) {
            dispatch({ type: "Increase", id })
        }
    }
    function Decrease(id) {
        const index = cart.findIndex(p => p.id === id)
        if (cart[index].quantity > 1) {
            dispatch({ type: "Decrease", id })
        }
    }
    return (
        <article>
            <div className='cart-products' style={{
                backgroundColor: isOdd ? "lightgray" : "darkgray"
            }}>
                <img src={product.image} alt={product.title} />

                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
                <div className="cart-button">
                    <button className='cart-btn-'
                        onClick={() => Decrease(product.id)}>-</button>
                    <button
                        className='cart-btnq'>{product.quantity}</button>
                    <button className='cart-btnplus'
                        onClick={() => Increase(product.id)}><b>+</b></button>
                </div>
                <p className="remove-btn"
                    onClick={() => dispatch({ type: "Remove", id: product.id })}>x</p>
            </div>
        </article>
    )
}

export default CartProduct
