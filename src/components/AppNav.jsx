import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const AppNav = () => {
    let button,cart;
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.clear();
        navigate("/");
    }
    if (localStorage.getItem('token')===null){
        button = <NavLink to="/login" className="btn btn-primary">Login</NavLink>;
    }else {
        button = <button onClick={handleLogout} className="btn btn-primary">Logout</button>;
        cart = <NavLink to="/cart" className="btn btn-primary mr-4">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            View cart
        </NavLink>
    }
    return (
        <div>
            <div className="navbar bg-base-100 mt-5">
                    <div className="flex-1">
                        <NavLink to="/" className="px-10 font-semibold text-2xl uppercase">Apple</NavLink>
                    </div>
                    <div className="flex-none">
                        {cart}
                        {button}
                        {/*<div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>*/}

                    </div>
                </div>
        </div>
    );
};

export default AppNav;