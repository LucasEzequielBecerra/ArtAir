import React, { useContext } from 'react'
import './Style.css'
import cartContext from '../../context/cartContext'


const Cart = ({ prod, clearCart, removeItem }) => {



    return (



        <div className='row container-product'>

            <div className='cart-product-container col-8 '>
                <div className='row'>
                    <div className='img-container col-2'><img src={prod.img} alt={prod.title} className="img-item" /></div>
                    <div className='description-container col-10'>
                        <div className='cart-product-title'>{prod.title}</div>
                    </div>

                </div>
            </div>
            <div className='cart-price-container col-1'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(prod.price.toFixed(2))}</div>
            <div className='cart-quantity-container col-2'>{prod.quantity}</div>
            <div className='cart-subtotal-container col-1'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format((prod.price * prod.quantity).toFixed(2))}</div>
            <div className='remove-button-container col'> <button onClick={() => removeItem(prod.id)} className='remove-btn' ><span className="delete-icon">&#x2715;</span></button> </div>
        </div >
    )
}

export default Cart