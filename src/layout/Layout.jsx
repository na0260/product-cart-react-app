import React from 'react';
import AppNav from "../components/AppNav.jsx";
import Footer from "../components/Footer.jsx";

const Layout = (props) => {
    return (
        <div>
            <AppNav/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;