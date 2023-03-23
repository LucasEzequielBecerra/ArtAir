import React from 'react'
import Counter from '../Counter/Counter'
import { BsHeart } from "react-icons/bs"
import './Style.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({ prod, onAddToCart, inCart }) => (
    <div className='container item-detail'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='container-img'>
                    <picture>
                        <img src={prod.img} className='img-fluid img-producto' />
                    </picture>
                </div>
            </div>
            <div className='col-lg-6 container-detail'>
                <div className='container-title'>
                    <h3 className='title-product'>{prod.title}</h3>
                </div>



                {inCart ?



                    <Link to='/cartView'>
                        <div className='container-button-to-cart'>
                            <button className='button-to-cart'>Ir al carrito</button>

                        </div>
                    </Link>

                    :
                    <>
                        <div className='container-price'>
                            <span className='price'>${prod.price}</span>
                        </div>
                        <div className='container-add'>
                            <p className='quantity'>Cantidad</p>
                            <Counter onAddToCart={onAddToCart} initial={1} stock={prod.stock} />

                        </div>
                        <div className='link-fav'>
                            <a > <BsHeart /> Agregar a favoritos</a>
                        </div>
                        <div className='container-description'>
                            <p className='description'>{prod.description}</p>
                        </div>
                    </>
                }



            </div>
        </div>
    </div>
)

export default ItemDetail