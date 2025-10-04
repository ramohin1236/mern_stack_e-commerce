import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed-nav-bar w-nav">
            <nav
                className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center"
            >
                <ul className="nav__links">
                    <li className="link">
                        <NavLink className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                         } to="/">Home</NavLink>
                    </li>
                    <li className="link">
                    <NavLink className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                         } to="/shop">Shop</NavLink>
                    </li>
                    <li className="link">
                    <NavLink className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                         } to="/pages">Pages</NavLink>
                    </li>
                    <li className="link">
                    <NavLink className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                         } to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="nav__logo">
                    <Link to="/">Lebaba<span>.</span></Link>
                </div>
                <div className="nav__icons relative">
                    <span><Link to="/search"><i className="ri-search-line"></i></Link></span>
                    <span><button className="hover:text-primary">
                        <i className="ri-shopping-bag-line"></i><sup
                            className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center"
                        >0</sup>
                    </button></span>
                    <span>

                         <Link to="/login"> < i className="ri-user-line rounded-full cursor-pointer"></i></Link>
                       
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar