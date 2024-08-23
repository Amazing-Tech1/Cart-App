import React, { useContext } from 'react'
import { CartContext } from './Feature/ContextProvider'
import { totalItem, totalPrice } from './Feature/CartReducer'


function footer() {
    const { cart } = useContext(CartContext)
    return (
        <div className='footer'>
            <h4>Total Items: <span>${totalItem(cart)}</span></h4>
        <h4>Total Price: <span>${totalPrice(cart)}</span> </h4>
        <button>Checkout</button>
        </div>
    )
}

export default footer
