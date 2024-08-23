import React, { useState, useEffect, createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()
function ContentProvider({ children }) {
    const [cart, dispatch] = useReducer(CartReducer, [])
    const [products, setProducts] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://fakestoreapi.com/products')
                let data = await response.json()
                data = data.map(product => ({...product, quantity: 1 }))
                console.log(data)
                setProducts(data)
            } catch (err) {
                if (err.response) {
                    setFetchError(err.message)
                    console.log(err.response.data);
                } else {
                    setFetchError(`Error: ${err.message}`)
                    console.log(`Error: ${err.message}`)
                }
            } finally { setIsLoading(false) }
        }
        fetchProducts();
    }, [])


    return (
        <CartContext.Provider value={{ cart, dispatch, products, fetchError, isLoading }}>
            {children}

        </CartContext.Provider>
    )
}

export default ContentProvider
