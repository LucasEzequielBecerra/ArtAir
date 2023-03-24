import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import cartContext from '../../context/cartContext'
import Loader from '../../components/Loader/Loader'

import { getSingleProductFromDataBase } from '../../services/firestore'
import Swal from 'sweetalert2'


const ItemDetailContainer = ({ }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [isInCart, setIsInCart] = useState(false)
    const { addItem } = useContext(cartContext)


    const params = useParams();
    const idProduct = params.idProduct;

    const alertBuy = (count) => {
        Swal.fire({
            icon: 'success',
            text: `Se ha agregado ${count} item al carrito`,
            target: '#custom-target',
            timer: '1000',
            showConfirmButton: false,
            customClass: {
                container: 'position-absolute'
            },
            toast: true,
            position: 'top-right'
        })
    }

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


        setIsInCart(true)
        addItem(product, count)
        alertBuy(count)
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