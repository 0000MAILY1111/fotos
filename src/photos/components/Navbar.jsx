import React from 'react'
import { NavLink } from 'react-router-dom';

///Nuevo componente de Navbar

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle"
                        onClick={toggleDropdown}
                        aria-haspopup="true" aria-expanded={isOpen}
                    >
                        Menú
                    </button>
                    <div className={`dropdown-menu dropdown-menu-right ${isOpen ? 'show' : ''}`}>
                        <button className="dropdown-item" type="button">Opcion1</button>
                        <button className="dropdown-item" type="button">Opcion2</button>
                        <button className="dropdown-item" type="button">Opcion3</button>
                    </div>
                </div>

                <div className="d-flex ">

                    <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/login">
                        Login
                    </NavLink>
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/home">
                        Logout
                    </NavLink>
                </div>

            </nav>

        </>
    );
};
export default Navbar;
