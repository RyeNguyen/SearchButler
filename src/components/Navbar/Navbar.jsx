import React from 'react';
import {Link} from 'react-router-dom';

import Search from "../Search/Search";
import './Navbar.styles.css';

const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className='navbar'>
            <h1 className='navbar__background'>SearchButler</h1>
            <Link className='navbar__logo' to='/'>SearchButler</Link>
            <Search/>
            <button className='navbar__toggle' type='button' onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? 'Light' : 'Dark'}
            </button>
        </div>
    )
}

export default Navbar;