
import React from 'react'
import {Link, Outlet} from "react-router-dom"
import './Header.css'


export default function Header() {
  return (
    <>
    <div id='header'>
        <Link to="/" style={{textDecoration: "none"}}><h3>CROCHETOPIA</h3></Link>
        <div className='headerOne'>
            <ul className="headlink">
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/shop">
                    <li>SHOP</li>
                </Link>
                <Link to='/contact'>
                    <li>CONTACT</li>
                </Link>
            </ul>
        </div>
        <div className="cart-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="shopping-bag"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"></path></svg>
        </div>
    </div>
    <Outlet />
    </>

  )
}