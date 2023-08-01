import React, {useEffect, useState} from 'react';
import CartItem from "./CartItem.jsx";
import fetchCart from "../utils/fetchCart.js";
import removeCart from "../utils/removeCart.js";
import convertPrice from "../utils/convertPrice.js";

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
    const handleRemove = (productId) => {
        removeCart(productId)
            .then(data => {
                if (data?.msg === "success") {
                    const remainingItems = items.filter(item => item.product.id !== productId);
                    setItems(remainingItems);
                }
            })
            .catch(err => console.log(err))
    }
    const calculateTotalPrice = () => {
        const totalPrice = items.reduce((total, currentValue) => {
            const price = convertPrice(currentValue);
            return total + price ;
        }, 0);
        return totalPrice.toLocaleString();
    }
    return (
        <div>
            <div>
                <div className="container mx-auto my-12 p-9">
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3
                 gap-10">
                        <div className="col-span-2">
                            {items.map(item => <CartItem key={item.id} product={item.product} remove={handleRemove}/>)}
                        </div>
                        <div>
                            <div className="card card-side bg-base-100 p-5 shadow-xl shadow-amber-50">
                                <div className="card-body">
                                    <p>Total item : {items.length}</p>
                                    <h2 className="card-title">Total Price : {calculateTotalPrice()} BDT</h2>
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