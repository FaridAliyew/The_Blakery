import React, { useEffect, useState } from 'react';

function CheckOut() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('myCart');
    if (storedCart) {
      setMyCart(JSON.parse(storedCart));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        
        <div className="bg-white p-6 rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">Contact</h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Log in
              </a>
            </div>
            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span className="text-sm text-gray-700">
                Email me with news and offers
              </span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="block w-full border border-gray-300 rounded px-3 py-2 mt-2"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Delivery</h2>
            <select className="block w-full border border-gray-300 rounded px-3 py-2 mb-4">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Address"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="ZIP code"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Shipping method</p>
              <p className="text-sm text-gray-700">Standard - $5.99</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Payment</h2>
            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Credit card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>PayPal</span>
              </label>
            </div>
            <input
              type="text"
              placeholder="Card number"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <div className="grid grid-cols-2 gap-2 mb-4">
              <input
                type="text"
                placeholder="Expiration date (MM/YY)"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Security code"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Name on card"
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span className="text-sm text-gray-700">
                Save my information for a faster checkout
              </span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition"
          >
            Pay now
          </button>
        </div>

        <div className="bg-white p-6 rounded shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          
          {myCart.length === 0 ? (
            <p className="text-gray-500">No packages in cart</p>
          ) : (
            <div className="space-y-6">
              {myCart.map((packObj, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded p-4"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    BUILD A BOX {packObj.packSize} PACK
                  </h3>
                  <div className="space-y-2">
                    {Object.keys(packObj.counts).map((productId) => {
                      const productCount = packObj.counts[productId];
                      return (
                        <div
                          key={productId}
                          className="flex items-center justify-between bg-gray-50 p-2 rounded"
                        >
                          <span className="text-sm text-gray-700">
                            Product ID: {productId}
                          </span>
                          <span className="text-sm text-gray-700">
                            Qty: {productCount}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
