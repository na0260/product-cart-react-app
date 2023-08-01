import React, {useEffect, useState} from 'react';
import CartItem from "./CartItem.jsx";
import fetchCart from "../utils/fetchCart.js";

const CartList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchCart()
            .then(data => {
                if (data?.msg === "success") {
                    setItems(data.data);
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div>
                <div className="container mx-auto my-12 p-9">
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3
                 gap-10">
                        <div className="col-span-2">
                            {items.map(item => <CartItem key={item.id} product={item.product}/>)}
                        </div>
                        <div>
                            <div className="card card-side bg-base-100 p-5 shadow-xl shadow-amber-50">
                                <div className="card-body">
                                    <h2 className="card-title">Total item : </h2>
                                    <p>Total Price :</p>
                                    <div className="flex justify-end">
                                        <button className="btn btn-primary">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1
                 gap-4">

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartList;