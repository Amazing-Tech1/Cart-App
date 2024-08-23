import React, { useContext } from 'react'
import { CartContext } from './Feature/ContextProvider'
import { useParams, Link } from 'react-router-dom'

function ProductPage() {
    const { products, dispatch } = useContext(CartContext)
    const { id } = useParams();
    const product = products.find(product => (product.id).toString() === id);


    return (
        <article className='productPage'>
            {product &&
                <div>
                    <h1>{(product.category).toUpperCase()}</h1>
                    <div className='product-content'>
                        <div className='product-detail' >

                            <img src={product.image} alt="Product image" />
                            <h3>{product.description}</h3>
                        </div>
                        <div className='product-details'>
                            <h2>{product.title}</h2>
                            <h4>Price: $<i>{product.price}</i></h4>
                            <p className='cart-Link'
                                onClick={() => dispatch({ type: "Add", product: product })}> Add to Cart
                            </p>
                        </div>
                    </div>
                </div>
            }

            {!product &&
                <div style={{
                    height:"80vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "blue"
                }}>
                    <h2>Product Not Found</h2>
                    <p>Well, that's disappointing..</p>
                    <p>
                        <Link to="/">
                            Visit our Homepage
                        </Link></p>
                </div>
            }
        </article >
    )
}

export default ProductPage
