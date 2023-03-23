import React, { useContext, useState } from 'react'
import cartContext from '../../context/cartContext';
import './Style.css'

function CheckoutForm(props) {

    const { cart } = useContext(cartContext)
    console.log(cart)
    
    const [userData, setUserData] = useState({
        name: "",
        surname:"",
        email: "",
        phone: "",
    });
    
    function handleChange(evt) {
        const value = evt.target.value;
        const input = evt.target.name;
        
        const newUserData = { ...userData }
        newUserData[input] = value;
        setUserData(newUserData)
    }
    
    console.log(userData)

    function clearForm() {
        setUserData({
            name: "",
            surname: "",
            email: "",
            phone: "",
        });
    }

    function submitData(cart, totalPrice) {
        props.onSubmit(userData, cart, totalPrice)
    }

    const totalPrice =() => {
        let finalPrice = 0;

        cart.forEach((prod) => {
            finalPrice += prod.quantity * prod.price
        })
        return finalPrice
    }

    return (
        <div className='container-form-checkout'>
            <div className='container-user-data' >

                <div className='container-title'>

                    <h2 className='title-checkout'>Datos de comprador</h2>
                </div>
                <div className='container-form'>
                    <div className='cart-checkout'>
                        <div className='name-surname'>
                            <div className='input-name input'>

                                <label > Nombre </label>
                                <input
                                    type="text "
                                    value={userData.name}
                                    name="name"
                                    required onChange={handleChange} />

                            </div>
                            <div className='input-surname input'>
                                <label > Apellido </label>
                                <input
                                    value={userData.surname}
                                    name="surname"
                                    type="text"
                                    required
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className='email-phone'>

                            <div className='input-email input'>
                                <label >E-mail</label>
                                <input
                                    value={userData.email}
                                    name="email"
                                    type="email"
                                    required
                                    onChange={handleChange} />
                            </div>
                            <div className='input-phone input'>
                                <label >Phone   </label>
                                <input 
                                value={userData.phone}
                                name="phone"
                                type="text"
                                required
                                onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary' onClick={()=> submitData(cart, totalPrice())}>Enviar</button>
                    <button className='btn btn-default' onClick={clearForm}>Cancelar</button>
                </div>
            </div>
            <div className='purchase-summary-container'>
                <div className='purchase-summary'>
                    <h4> Articulos en carrito </h4>
                    <ul>
                        {cart.map((prod) => <li>
                            <h5>{prod.title}</h5>
                            <p>{prod.price}</p>
                            <p>{prod.quantity}</p>
                        </li>)}
                    </ul>
                    {totalPrice === 0 ? '' : <p>{totalPrice}</p>}

                </div>
            </div>
        </div>
    )
}

export default CheckoutForm