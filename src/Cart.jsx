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
          <div className="cart-details">
            <p>Products</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
          {cart.map((product, index) => (
            <CartProduct product={product}
              key={index} isOdd={index % 2 !== 0}
            />
          ))
          }
        </div>
      }

    </div>
  )
}

export default Cart
