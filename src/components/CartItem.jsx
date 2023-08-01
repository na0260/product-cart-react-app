import React from 'react';

const CartItem = (props) => {
    return (
        <div>
            <div className="card card-side bg-base-100 p-5">
                <figure><img src={props.product.image} alt="Image"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.product.title}</h2>
                    <p>{props.product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;