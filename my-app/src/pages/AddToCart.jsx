import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function getPackPrice(packSize) {
    switch (packSize) {
        case 6:
            return 50;
        case 12:
            return 81;
        case 18:
            return 110;
        default:
            return 0;
    }
}

function AddToCart() {
    const [cartOrders, setCartOrders] = useState([]);
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
    const supabaseHeaders = {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
    };

    useEffect(() => {
        const cartString = localStorage.getItem('myCart');
        let myCart = cartString ? JSON.parse(cartString) : [];

        if (myCart.length === 0) {
            setCartOrders([]);
            return;
        }

        fetch(`${supabaseUrl}?select=*`, { headers: supabaseHeaders })
            .then((res) => res.json())
            .then((allProducts) => {
                const newCartOrders = myCart.map((orderObj) => {
                  
                    const orderItems = allProducts
                        .filter((p) => orderObj.counts[p.id] > 0)
                        .map((p) => ({
                            ...p,
                            order_count: orderObj.counts[p.id],
                        }));
                    return {
                        packSize: orderObj.packSize,
                        counts: orderObj.counts,
                        items: orderItems,
                    };
                });
                setCartOrders(newCartOrders);
            })
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

    const grandTotal = cartOrders.reduce((acc, order) => {
        return acc + getPackPrice(order.packSize);
    }, 0);

    return (
        <section className="max-w-6xl mx-auto p-4 mt-5 text-white">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                <div className="bg-[#2A2A2A] p-4 rounded-md">
                    <Link to="/build" className="underline text-sm">
                        Continue Shopping
                    </Link>

                    {cartOrders.map((order, idx) => {
                        const packPrice = getPackPrice(order.packSize);
                        return (
                            <div key={idx} className="mt-6 bg-[#1C1C1C] p-4 rounded-md">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">
                                    BUILD A BOX {order.packSize} PACK
                                </h2>
                                <p className="text-sm text-gray-400 mb-2">
                                    Price: ${packPrice}
                                </p>
                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between mt-3 bg-[#2A2A2A] p-3 rounded"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image_url}
                                                alt={item.image_name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div>
                                                <p className="text-sm md:text-base font-semibold uppercase">
                                                    {item.image_name}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {item.order_count} {item.order_count > 1 ? 'cookies' : 'cookie'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                <div className="bg-[#2A2A2A] p-4 rounded-md">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">YOUR CART</h2>

                    <div className="flex items-center justify-between mb-2">
                        <span>SUBTOTAL:</span>
                        <span>${grandTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                        <span>SHIPPING:</span>
                        <span>Calculated at checkout</span>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="gift-note" className="mb-1 text-sm">
                            GIFT-NOTE:
                        </label>
                        <textarea
                            id="gift-note"
                            rows="2"
                            className="p-2 rounded border border-white text-white"
                            placeholder="Leave a note..."
                        />
                    </div>
                    <Link to='/checkOut' className="block text-center bg-white cursor-pointer text-black w-full mt-4 py-2 rounded font-bold">
                        CHECKOUT
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AddToCart;
