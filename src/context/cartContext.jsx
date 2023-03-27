import { createContext, useState } from "react";
import { json } from "react-router";

const cartContext = createContext({
    cart: []
})

export function CartContextProvider(props) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    function addItem(item, count) {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity: count })
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    

    function removeItem(itemId) {
        const newCart = cart.filter(prod => prod.id !== itemId)
        setCart(newCart)
        
        localStorage.setItem('cart', JSON.stringify(newCart))
        }

    function clearCart() { 
        const newCart = []
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    // function isInCart(itemId) { cart.find(prod => prod.id === itemId) ? true : false }




    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clearCart, }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext