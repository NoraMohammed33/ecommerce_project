import React from 'react';
import logo from "../../images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-main-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="#"><img src={logo} alt='' /></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Brands</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-3">

                            <NavLink type="button" className="btn me-3 position-relative">
                                Cart <i className="fa-solid fa-cart-shopping" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    10
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </NavLink>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}
