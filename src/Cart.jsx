import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Feature/ContextProvider'
import CartProduct from './CartProduct'



function Cart() {

  const { cart } = useContext(CartContext)
  return (
    <div className='cart-container'>
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", color: "blue"
      }}>
        {cart.length === 0 &&
          <>
            <h2>Oops! it looks like your cart is empty</h2>
            <p>Go to our Store <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>here</Link></p>
          </>
        }
      </div>
      {cart.length > 0 &&
        <div className='cartproduct'>
          {cart.map(product => (
            <CartProduct product={product}
              key={product.id}
            />
          ))
          }
        </div>
      }

    </div>
  )
}

export default Cart
