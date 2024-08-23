import React, { useContext } from 'react'
import { CartContext } from './Feature/ContextProvider'
import Product from './Product'

function Home() {
    const { products, isLoading, fetchError } = useContext(CartContext)

    return (
        <div className='products'>
            {isLoading && <p> Loading products...</p>}
            {!isLoading && fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))
            }

        </div>
    )
}

export default Home
