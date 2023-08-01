import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import CartList from "./CartList.jsx";

const AppNav = () => {
    let button;
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.clear();
        navigate("/");
    }
    if (localStorage.getItem('token')===null){
        button = <NavLink to="/login" className="btn btn-primary">Login</NavLink>;
    }else {
        button = <button onClick={handleLogout} className="btn btn-primary">Logout</button>;
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Apple</NavLink>
                    </div>
                    <div className="flex-none">
                        <CartList/>
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