import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import cartContext from '../../context/cartContext'
import Loader from '../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import { getSingleProductFromDataBase } from '../../services/firestore'


const ItemDetailContainer = ({ }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [isInCart, setIsInCart] = useState(false)
    const { addItem } = useContext(cartContext)


    const params = useParams();
    const idProduct = params.idProduct;


    async function elementFinded() {
        try {
            let respuesta = await getSingleProductFromDataBase(idProduct)
            setProduct(respuesta)
        }
        catch (err) {
            alert(err)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        elementFinded()
    }, [])



    function onAddToCart(count) {

        alert(`Has agregado ${count} items al carrito`)
        setIsInCart(true)
        addItem(product, count)
    }

    return (
        loading
            ?
            <div className='container-loader'>
                <Loader color='#178080' />
            </div>
            :
            <div>
                <ItemDetail onAddToCart={onAddToCart} inCart={isInCart} key={product.id} prod={product} />
            </div>
    )
}

export default ItemDetailContainer