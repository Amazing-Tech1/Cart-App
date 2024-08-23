export function totalItem(cart) {
    return cart.reduce((sum, product) => sum + product.quantity, 0)
}
export function totalPrice(cart) {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0)
}


const CartReducer = (state, action) => {

    switch (action.type) {
        case "Add":
            return [...state, action.product]
        case "Remove":
            return state.filter(p => p.id !== action.id)
        case "Increase":
            const indexI = state.findIndex(p => p.id === action.id)
            state[indexI].quantity += 1
            return [...state]

        case "Decrease":
            const indexD = state.findIndex(p => p.id === action.id)
            state[indexD].quantity -= 1
            return [...state]
        default:
            state;
    }
}
export default CartReducer