import React from "react";
import logo from '../images/logo.svg';

function Header(){
    return(
        <>
        <header className="header1">
            <div className="logo-parant">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav-parant">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>

        </header>
        </>
    )
}

export default Header;