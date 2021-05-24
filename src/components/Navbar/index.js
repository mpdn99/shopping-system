import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import {ChevronDown, Heart, ShoppingCart} from 'react-feather'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-right">
                <Link to='/'
                className='navbar-logo'>
                    ABC
                </Link>
                <Link to='/'
                className='navbar-list'>
                    Homepage
                </Link>
                <Link className="navbar-list" to="/addidas">
                    Addidas
                    <ChevronDown size={15} strokeWidth="3px" />
                </Link>
                <Link className="navbar-list" to="/balenciaga">
                    Balenciaga
                    <ChevronDown size={15} strokeWidth="3px" />
                </Link>
                <Link className="navbar-list" to="/converse">
                    Converse
                    <ChevronDown size={15} strokeWidth="3px" />
                </Link>
                <Link className="navbar-list" to="/nike">
                    Nike
                    <ChevronDown size={15} strokeWidth="3px" />
                </Link>
            </div>

            <div className="navbar-left">
                <Link to='/'
                className='navbar-list'>
                    <Heart />
                </Link>
                <Link to='/cart'
                className='navbar-list'>
                    <ShoppingCart />
                </Link>
                <div className="space"></div>
            </div>
        </div>
    )
}

export default Navbar
