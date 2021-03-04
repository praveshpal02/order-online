import React from 'react';

const navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            
            <a className="navbar-brand" href="/">
                Order Online
            </a>
            
           
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link" href="/cart">Cart</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/signin">Sign In</a>
                </li>
               
            </ul>
        </nav>

    )
}

export default navbar;