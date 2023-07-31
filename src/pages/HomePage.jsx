import React from 'react';
import Layout from "../layout/Layout.jsx";
import Product from "../components/Product.jsx";
import ProductList from "../components/ProductList.jsx";

const HomePage = () => {
    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default HomePage;