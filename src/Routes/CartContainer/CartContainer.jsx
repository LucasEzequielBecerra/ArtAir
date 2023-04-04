import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../context/cartContext'
import { totalPrice } from '../CartCheckout/functionsForm'
import Cart from './Cart'
import './Style.css'



const CartContainer = () => {


    const { cart } = useContext(cartContext)

    const { removeItem, clearCart } = useContext(cartContext)




    return (

        cart.length === 0 ?
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

                        <div className='product-head col-lg-8 col-12  '>Producto</div>
                        <div className='price-head col-1 d-none d-lg-flex'>Precio</div>
                        <div className='quantity-head col-1 d-none d-lg-flex'>Cantidad</div>
                        <div className='subtotal-head col-1 d-none d-lg-flex'>Subtotal</div>
                    </div>


                    {cart.map((prod) => <Cart key={prod.id} prod={prod} removeItem={removeItem} />)}

                    <div className='total-container'>
                        <div className='total'>

                            <div className='subtotal'>
                                <span className='subtotal-title'>Subtotal</span>
                                <span className='subtotal-number'>{totalPrice(cart)}</span>
                            </div>
                            <div className='finalize-purchase'> <Link to='/checkout' className='btn-purchase'>Finalizar Compra</Link> </div>
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