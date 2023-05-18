import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import { BsFacebook, BsInstagram,  BsTwitter } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'


const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer'>
                <div className='footer-logo'><Link to="/" className="navbar-brand" href=''><img src='/../../../public/logo-nav-foot.png' className='img-logo-link img-fluid' /></Link></div>
                <div className='footer-text'> <p>Derechos de autor © 2023 - Todos los derechos reservados</p></div>
                <div className='footer-logos-social'>
                    <p>Seguinos!!</p>
                    <ul className='logos-social'>
                        <li className='logo'><BsFacebook /></li>
                        <li className='logo'><BsInstagram /></li>
                        <li className='logo'><BsTwitter /></li>
                        <li className='logo'><GrMail/></li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer