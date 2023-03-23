import React from 'react'
import { createOrder } from '../../services/firestore'
import { useNavigate } from 'react-router'
import CheckoutForm from './CheckoutForm'


function CheckoutCart( ) {
    const navigateTo = useNavigate()

    async function handleCheckout(userData, cart, totalPrice) {
        const orderData = {
            buyer: userData,
            items: cart,
            total: totalPrice,
            timestamp: new Date(),
        }
        const id = await createOrder(orderData)

        // navigateTo(`/checkout/${id}`)
    }

    return (
        <div><CheckoutForm onSubmit={handleCheckout }/></div>
    )
}

export default CheckoutCart