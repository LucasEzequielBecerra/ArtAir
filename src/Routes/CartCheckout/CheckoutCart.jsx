import React, { useEffect } from 'react'
import { createOrder } from '../../services/firestore'
import { useNavigate } from 'react-router'
import CheckoutForm from './CheckoutForm'


function CheckoutCart( ) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigateTo = useNavigate()

    async function handleCheckout(userData, cart, totalPrice) {
        const orderData = {
            buyer: userData,
            items: cart,
            total: totalPrice,
            timestamp: new Date(),
        }

        const id = await createOrder(orderData)
        

        navigateTo(`/`)
    }

    return (
        <div><CheckoutForm onSubmitData={handleCheckout }/></div>
    )
}

export default CheckoutCart