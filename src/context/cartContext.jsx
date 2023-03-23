import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
})

export function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addItem(item, count) {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity: count })
        setCart(newCart)

    }

    function removeItem(itemId) { setCart(cart.filter(prod => prod.id !== itemId)) }

    function clearCart() { setCart([]); }

    // function isInCart(itemId) { cart.find(prod => prod.id === itemId) ? true : false }




    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clearCart, }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext