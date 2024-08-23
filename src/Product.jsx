import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Feature/ContextProvider'
function Product({ product }) {
    const { dispatch } = useContext(CartContext)
    return (
        <div className='productCard'>
            <Link to={`product/${product.id}`}>
                <img src={product.image} width="200px" height="182px " />
            </Link>
            <div className='product-attribute'>
                <h2>{(product.title).length <= 40
                    ? product.title : `${(product.title).slice(0, 25)}...`}</h2>
                <h3>${product.price}</h3>
                <p className='cart-Link'
                    onClick={() => dispatch({ type: "Add", product: product })}>
                    Add to Cart</p>
            </div>
        </div >
    )
}

export default Product
