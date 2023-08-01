import React from 'react';
const CartItem = (props) => {

    return (
        <div>
            <div className="card card-side bg-base-100 p-5 bordered mb-10 shadow-xl hover:shadow-amber-50">
                <figure><img className="w-36" src={props.product.image} alt="Image"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.product.title}</h2>
                    <p>{props.product.price} BDT</p>
                    <div className="flex justify-end">
                        <button onClick={()=>{props.remove(props.product.id)}} className="btn btn-primary btn-outline w-36">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;