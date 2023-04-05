import cartContext from "../../context/cartContext";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { cart } = useContext(cartContext)

    let cartCount = 0

    cart.map((prod) => cartCount += prod.quantity)



    return (
        <Link to='/cartView'>

            <div className="container-cart btn btn-outline-success cart"><i className="cart-icon"><FaShoppingCart /> </i>
                {cartCount !== 0 && <p className="cart-number">{cartCount}</p>}
            </div>
        </Link>
    )
}

export default CartWidget

