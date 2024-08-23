import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from './Feature/ContextProvider'
function Navbar() {
    const { cart } = useContext(CartContext)
    return (
        <div className="nav">
            <Link to="/">Amazing-Shop</Link>
            <Link to="/cart"><BsCart /><sup style={{ color: "red" }}>{cart.length}</sup></Link>
        </div>
    )
}

export default Navbar
