import React, { useContext } from 'react'
import './Style.css'
import cartContext from '../../context/cartContext'
import { Link } from 'react-router-dom'


const Cart = ({ prod, clearCart, removeItem }) => {



    return (



        <div className='row container-product'>

            <div className='cart-product-container col-lg-8 col-12'>
                <div className='row'>
                    <div className='img-container col-lg-3 col-4'><img src={prod.img} alt={prod.title} className="img-item" /></div>
                    <div className='description-container col-lg-9 col-8'>
                        <Link to={`/product/${prod.id}`} className='cart-product-title'>{prod.title}</Link>
                    </div>

                </div>
            </div>
            <div className='cart-price-container containers-cart col-lg-1 col-3'> <p className='d-md-flex d-lg-none'>Precio</p> {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(prod.price.toFixed(2))}</div>
            <div className='cart-quantity-container containers-cart col-lg-1 col-3'><p className='d-md-flex d-lg-none'>Cantidad</p>{prod.quantity}</div>
            <div className='cart-subtotal-container containers-cart col-lg-1 col-3'><p className='d-md-flex d-lg-none'>Subtotal</p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format((prod.price * prod.quantity).toFixed(2))}</div>
            <div className='remove-button-container col-3 col-lg-1'> <button onClick={() => removeItem(prod.id)} className='remove-btn' ><span className="delete-icon">&#x2715;</span></button> </div>
        </div >
    )
}

export default Cart