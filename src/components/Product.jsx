import React from 'react';
import createCart from "../utils/createCart.js";

const Product = (props) => {
    const handleCart = ()=>{
        createCart(props.product.id)
            .then(data=>{
                if (data?.msg === "success"){
                    alert("The Product is added to cart successfully")
                }
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <div className="card w-100 glass">
                <figure><img src={props.product.image} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.product.title}</h2>
                    <p>{props.product.short_des}</p>

                    <div className="card-actions items-center">
                        <div className="">
                            <p className="font-extrabold text-white">Price: {props.product.price} BDT</p>
                        </div>
                        <div className="justify-end">
                            <button onClick={handleCart} className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;