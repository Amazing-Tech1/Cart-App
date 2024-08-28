import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Feature/ContextProvider'
function Product({ product }) {
    const { dispatch } = useContext(CartContext)
    return (
        <div className='productCard'>
            <div className="productCard-img">
            <Link to={`product/${product.id}`}>
                <img src={product.image} />
            </Link>
            </div>
            <div className='product-attribute'>
                <h2>{(product.title).length <= 30
                    ? product.title : `${(product.title).slice(0, 25)}...`}</h2>
                <h3>${product.price}</h3>
                <button className='cart-Link'
                    onClick={() => dispatch({ type: "Add", product: product })}>
                    Add to Cart</button>
            </div>
        </div >
    )
}

export default Product
