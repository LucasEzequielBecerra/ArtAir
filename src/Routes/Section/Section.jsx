import React, { useEffect, useState } from 'react'

import { getOfferProductsFromDataBase, getNewProductsFromDataBase } from '../../services/firestore'
import ItemList from '../../Routes/ItemListContainer/ItemList'
import Loader from '../../components/Loader/Loader'
import Description from './Description'

const Section = ({ home, sectionName }) => {

    const [newProducts, setNewProducts] = useState([])
    const [loading, setLoading] = useState(true)



    const description = home ? '' : (sectionName === 'Ofertas' || sectionName === 'Novedades') && <Description/>


    async function getProducts() {

        try {
            if (sectionName === 'Ofertas') {
                let respuesta = await getOfferProductsFromDataBase()
                setNewProducts(respuesta)
            } else if (sectionName === 'Novedades') {
                let respuesta = await getNewProductsFromDataBase()
                setNewProducts(respuesta)
            }
        }
        catch (err) {
            alert(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [sectionName])

    return (
        <>
            {loading
                ?
                <div className='container-loader'>
                    <Loader color='#178080' />
                </div>
                :
                <>
                    <ItemList title={sectionName} Prod={newProducts}>
                        
                            {description}
                        
                    </ItemList>

                </>
            }
        </>
    )
}


export default Section