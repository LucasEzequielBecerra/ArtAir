

import { useEffect, useState } from 'react';
import { getProductsFromDataBase } from '../../services/firestore';
import CartWidget from './CartWidget';
import './Style.css';
import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import '../../../public/logo-nav-foot.png'




function BasicExample() {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const location = useLocation();
    const idPage = location.pathname;

    async function leerDatos() {
        const prod = await getProductsFromDataBase()
        setProducts(prod)
    }
    useEffect(() => {
        setSearch("")
        leerDatos()
    },[idPage])

    const handleChange = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)        
    }

    function handleKeyDown(evento) {
        if (evento.key === "Backspace" && search.length === 1 ) {
        setSearch("");
        }
    }

    const filter = (searchTerm) => {
        let searchRes = products.filter((prod) => {
            if (prod.title.toString().toLowerCase().trim().includes(searchTerm.toLowerCase())
                || prod.description.toString().toLowerCase().trim().includes(searchTerm.toLowerCase())) {
                return prod
            }
        })
        setSearchResults(searchRes)
    }

    console.log(search)

    return (
        <nav className="navbar navbar-expand-lg  d-flex flex-column header">
            <div className="container-fluid d-flex  nav-top">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" href=''><img src='../../../public/logo-nav-foot.png' className='img-logo' /></Link>
                <div className='form-search-container'>
                    <form className="d-flex" role="search">
                        <div className='search-container me-2'>
                            <input className="form-control    d-lg-flex" type="search" placeholder="Buscar" aria-label="Search" onChange={handleChange}
                                value={search} onKeyDown={handleKeyDown} />
                            <div className={search === '' ? 'search-results-container-none' : 'search-results-container'}>
                                <ul className='search-list'>
                                    
                                {searchResults.map((prod) => {
                                    return (
                                            <li className='search-item' key={prod.id}>
                                                <Link  to={`/product/${prod.id}`}>
                                                    {prod.title}
                                                </Link>
                                            </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        <Link to={searchResults.length > 0 && `/product/${searchResults[0].id}`} className="btn btn-outline-success me-2" type="button"><BsSearch /></Link>
                    </form>
                    <CartWidget />
                </div>

            </div>
            <div className='container-fluid d-flex nav-bot'>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 list-links">

                        <li className="nav-item dropdown">

                            <p className="nav-link dropdown-toggle link-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </p>
                            <ul className="dropdown-menu">
                                <li><Link to='/products' className="dropdown-item">Catalogo de productos</Link></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><Link to='/category/Atriles' className="dropdown-item">Atriles</Link></li>
                                <li><Link to='/category/Acuarelas' className="dropdown-item">Acuarelas</Link></li>

                                <li><Link to='/category/Lapices' className="dropdown-item">Lapices</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                TECNICAS
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to='/category/Acuarelas' className="dropdown-item">Acuarela</Link></li>
                                <li><Link to='/category/Oleos' className="dropdown-item">Oleo</Link></li>
                                <li><Link to='/category/Acrilicos' className="dropdown-item">Acrilico</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/new" className="nav-link link-item " aria-current="page" >NOVEDADES</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/offer' className="nav-link link-item">OFERTAS</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/aboutus' className="nav-link link-item">SOBRE NOSOTROS</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/faq' className="nav-link link-item">PREGUNTAS FRECUENTES</Link>
                        </li>

                        <div className='form-search'>
                            <form className="d-flex search-bar" role="search">
                                <div className='search-container me-2'>
                                <input className="form-control input-search me-2 d-lg-flex" type="search" onChange={handleChange}
                                value={search} placeholder="Buscar" aria-label="Search" />
                                <div className={search === "" ? 'search-results-container-none' : 'search-results-container'}>
                                <ul className='search-list'>
                                    
                                {searchResults.map((prod) => {
                                    return (
                                            <li className='search-item' key={prod.id}>
                                                <Link onClick={()=> setSearch("")} to={`/product/${prod.id}`}>
                                                    {prod.title}
                                                </Link>
                                            </li>
                                    )
                                })}
                                </ul>
                            </div>
                                </div>
                                <Link to={searchResults.length > 0 && `/product/${searchResults[0].id}`} className="btn btn-outline-success me-2" type="submit"><BsSearch /></Link>
                            </form>
                            <div className='cart-widget-bot'>

                                <CartWidget />
                            </div>
                        </div>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default BasicExample;


