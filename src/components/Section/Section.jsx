import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { getOfferProductsFromDataBase, getNewProductsFromDataBase } from '../../services/firestore'
import ItemList from '../ItemListContainer/ItemList'

const Section = ({home, sectionName}) => {

    const [newProducts, setNewProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const description = home ? '' : sectionName === 'Ofertas' ? 'hola' : sectionName=== 'Novedades' && 'chau' 
    console.log(description)

    async function getProducts() {
        
        try {
            if(sectionName === 'Ofertas'){
                let respuesta = await getOfferProductsFromDataBase()
                setNewProducts(respuesta)
            } else if( sectionName === 'Novedades'){
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
                    <Loader  />
                </div>
                :
                <>
                    <ItemList title={sectionName} Prod={newProducts}>
                        <p>
                            {description}
                            
                            </p>
                    </ItemList>
                    
                </>
                }
        </>
    )
}


export default Section