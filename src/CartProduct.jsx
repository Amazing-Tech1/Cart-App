import React, { useContext } from 'react'
import { CartContext } from './Feature/ContextProvider'


function CartProduct({ product }) {
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
            <div className='cart-products'>
                <div className='details'>
                    <img width="70px" height="70px" src={product.image} alt={product.title} />
                    <div className='detail'>
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                        <div className="cart-btn">
                            <button className='cart-btn -m'
                                onClick={() => Decrease(product.id)}>-</button>
                            <button
                                className='cart-btn q'>{product.quantity}</button>
                            <button className='cart-btn +'
                                onClick={() => Increase(product.id)}><b>+</b></button>
                        </div>
                    </div>
                    <button className="remove-btn"
                        onClick={() => dispatch({ type: "Remove", id: product.id })}>X</button>
                </div>
            </div>
        </article>
    )
}

export default CartProduct
