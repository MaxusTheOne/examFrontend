import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar(){
    return (
        <nav className='nav-header'>
            <ul>
                <li>
                    <NavLink to="/">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/Deliveries">Deliveries</NavLink>
                </li>
                <li>
                    <NavLink to="/Vans">Vans</NavLink>
                </li>
            </ul>
        </nav>
    )
}