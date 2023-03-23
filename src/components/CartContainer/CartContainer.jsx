import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../context/cartContext'
import Cart from './Cart'
import './Style.css'



const CartContainer = () => {


    const { cart } = useContext(cartContext)
    const [inCart, setInCart] = useState([])

    const { removeItem, clearCart } = useContext(cartContext)

    useEffect(() => {
        setInCart(cart)
    }, [removeItem])

    function totalPrice() {
        let finalPrice = 0;

        inCart.forEach((prod) => {
            finalPrice += prod.quantity * prod.price
        })
        return finalPrice
    }


    return (

        inCart.length === 0 ?
            <div className=' back'>

                <div className='container-back-to-commerce'>
                    <h1 className='title-back-to-commerce'>El carrito esta vacio</h1>
                    <Link to='/'> <button className='back-to-commerce-btn'>Regresar a la tienda</button></Link>
                </div>
            </div>
            :
            <div className='cart'>

                <div className="cart-container">
                    <h3 className='cart-title'>Carrito</h3>
                    <div className='row head-container'>

                        <div className='product-head col-8  '>Producto</div>
                        <div className='price-head col-1'>Precio</div>
                        <div className='quantity-head col-2'>Cantidad</div>
                        <div className='subtotal-head col-1'>Subtotal</div>
                    </div>


                    {inCart.map((prod) => <Cart key={prod.id} prod={prod} removeItem={removeItem} />)}

                    <div className='total-container'>
                        <div className='total'>

                            <div className='subtotal'>
                                <span className='subtotal-title'>Subtotal</span>
                                <span className='subtotal-number'>{totalPrice().toFixed(2)}</span>
                            </div>
                            <div className='finalize-purchase'> <Link to='/' className='btn-purchase'>Finalizar Compra</Link> </div>
                            <Link to='/' className='keep-buying'> Seguir comprando </Link>
                        </div>
                        <div className='clear-cart-container'>

                            <button onClick={clearCart}>Vaciar carrito</button>
                        </div>
                    </div>

                </div>
            </div>


    )

}

export default CartContainer