import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'



const ItemList = ({ Prod, title, children }) => {
    return (
        <div className='lista row justify-content-center'>
            <h2 className='titulo'>{title}</h2>
            {children}
            {Prod.map((prod) => <Item key={prod.id} prod={prod} />)}
        </div>

    )
}

export default ItemList