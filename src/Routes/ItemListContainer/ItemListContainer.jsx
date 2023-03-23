import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategoryFromDataBase, getProductsFromDataBase } from '../../services/firestore'
import ItemList from './ItemList'
import './Style.css'



import Loader from '../../components/Loader/Loader'







const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')

    const params = useParams()
    const idCategory = params.idCategory

    async function leerDatos() {
        if (idCategory === undefined) {
            try {
                let respuesta = await getProductsFromDataBase()
                setProducts(respuesta)
                setTitle('Catalogo de productos')

            }
            catch (err) {
                alert(err)
            }
            finally {
                setLoading(false)
            }
        } else {
            try {
                let respuesta = await getProductsByCategoryFromDataBase(idCategory)
                setProducts(respuesta)
                setTitle(idCategory)
            }
            catch (err) {
                alert(err)
            }
            finally {
                setLoading(false)
            }
        }

    }


    useEffect(() => {
        leerDatos()
    }, [idCategory])

    return (
        loading
            ?
            <div className='container-loader'>
                <Loader color='#178080' />

            </div>
            :

            <div className='container-cards '>
                <ItemList title={title} Prod={products} />

            </div>

    )
}


export default ItemListContainer