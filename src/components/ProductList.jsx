import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import productFetch from "../utils/productFetchAPI.js";

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        productFetch()
            .then(data=>setProduct(data))
            .catch(err=>setError(err))
    }, [])
    let output;
    if (error) {
        output = <div>There is an error</div>
    } else if (product?.length > 0) {
        output = product.map(product => <Product key={product.id} product={product}/>);
    } else {
        output = <div>No Product Found!!!</div>
    }
    return (
        <div>
            <div className="container mx-auto my-12 p-9">
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                 gap-4">
                    {output}
                </div>
            </div>
        </div>
    );
};

export default ProductList;