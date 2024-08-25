import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    ///navbar navbar-expand-lg navbar-dark bg-dark
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-dark bg-dark ">

        
            <div className="d-flex">
                <NavLink className="navbar-brand" to="#">
                    Exam1
                </NavLink>
                <NavLink className="navbar-brand" to="#">
                    Eventos
                </NavLink>
            </div>

            <div className="d-flex ">

                <NavLink className={({isActive}) => `nav-item nav-link  ${isActive ? 'active': ''}`} to="/login">
                    Login
                </NavLink>
                <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`} to="/home">
                    Logout
                </NavLink>
            </div>


        </nav>


    )
}
