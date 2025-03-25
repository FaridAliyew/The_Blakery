import React, { useState, useEffect } from 'react';

function BuildAbox() {
    const [selectedPack, setSelectedPack] = useState(12);
    const [products, setProducts] = useState([]);

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

    const supabaseHeaders = {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
    };

    useEffect(() => {
        fetch(`${supabaseUrl}?select=*`, {
            headers: supabaseHeaders,
        })
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

    const totalSelected = products.reduce(
        (sum, product) => sum + product.order_count,
        0
    );

    const handleIncrement = async (id, currentCount) => {
        if (totalSelected + 1 > selectedPack) {
            alert(`You can only select up to ${selectedPack} cookies in this pack.`);
            return;
        }

        const newCount = currentCount + 1;
        try {
            await fetch(`${supabaseUrl}?id=eq.${id}`, {
                method: 'PATCH',
                headers: supabaseHeaders,
                body: JSON.stringify({ order_count: newCount }),
            });
            setProducts((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, order_count: newCount } : item
                )
            );
        } catch (error) {
            console.error('Error incrementing:', error);
        }
    };

    const handleDecrement = async (id, currentCount) => {
        const newCount = Math.max(currentCount - 1, 0);
        try {
            await fetch(`${supabaseUrl}?id=eq.${id}`, {
                method: 'PATCH',
                headers: supabaseHeaders,
                body: JSON.stringify({ order_count: newCount }),
            });
            setProducts((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, order_count: newCount } : item
                )
            );
        } catch (error) {
            console.error('Error decrementing:', error);
        }
    };

    const handlePackClick = (packNumber) => {
        setSelectedPack(packNumber);


        if (totalSelected > packNumber) {
            alert(`You already selected ${totalSelected} cookies, but the new pack size is ${packNumber}.
Please remove some items to fit the new pack size.`);
        }
    };

    const orderedImages = [];
    products.forEach((p) => {
        for (let i = 0; i < p.order_count; i++) {
            orderedImages.push(p.image_url);
        }
    });

    const finalCircles = Array.from({ length: selectedPack }, (_, i) => {
        const imageUrl = i < orderedImages.length ? orderedImages[i] : null;
        return imageUrl;
    });

    return (
        <section className="min-h-screen w-full text-white relative mt-10">
            <div className="max-w-4xl mx-auto px-4 py-10 text-center">
                <h1 className="text-3xl md:text-6xl font-bold uppercase mb-4">
                    BUILD YOUR BOX
                </h1>

                <p className="text-gray-300 max-w-2xl text-2xl mx-auto mb-6">
                    Go ahead, stuff your box. Select from a 6, 12, or 18 pack and choose
                    your favorite flavors. Prepare to <span className="font-semibold">#GETBLAKED</span>.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <button
                        onClick={() => handlePackClick(6)}
                        className={`
              px-6 py-3 rounded-[7px] font-bold border-1 transition-colors cursor-pointer
              ${selectedPack === 6 ? 'border-2' : 'border-gray-400 text-white'}
            `}
                    >
                        6 Pack | <span className="line-through text-red-500">$62</span> $50
                    </button>

                    <button
                        onClick={() => handlePackClick(12)}
                        className={`
              px-6 py-3 rounded-[7px] font-bold border-1 transition-colors cursor-pointer
              ${selectedPack === 12 ? 'border-2' : 'border-gray-400 text-white'}
            `}
                    >
                        12 Pack | <span className="line-through text-red-500">$101</span> $81
                    </button>

                    <button
                        onClick={() => handlePackClick(18)}
                        className={`
              px-6 py-3 rounded-[7px] font-bold border-1 transition-colors cursor-pointer
              ${selectedPack === 18 ? 'border-2' : 'border-gray-400 text-white'}
            `}
                    >
                        18 Pack | <span className="line-through text-red-500">$137</span> $110
                    </button>
                </div>

                <p
                    style={{ background: 'rgb(50,47,48)' }}
                    className="uppercase rounded-[7px] w-3/4 ms-auto me-auto text-[20px] p-[1rem] tracking-wider"
                >
                    25% off & free shipping on orders $60+
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 mb-36 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 lg:gap-7">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border border-[#555] rounded-md flex flex-col items-center"
                    >
                        <img
                            src={product.image_url}
                            alt={product.image_name}
                            className="w-full object-cover rounded-md mb-4"
                        />

                        <h2 className="text-[12px] md:text-xl text-center font-semibold mb-2 uppercase">
                            {product.image_name}
                        </h2>
                        <hr className="w-full border-[#555]" />

                        <div className="flex items-center gap-4 mt-auto mb-4">
                            <button
                                onClick={() => handleDecrement(product.id, product.order_count)}
                                className="text-2xl cursor-pointer"
                            >
                                -
                            </button>
                            <span className="text-[15px] md:mx-10">{product.order_count}</span>
                            <button
                                onClick={() => handleIncrement(product.id, product.order_count)}
                                className="text-2xl cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{ background: 'rgb(50,47,48)' }}
                className="fixed bottom-0 left-0 w-full py-4 overflow-x-auto"
            >
                <div className="flex items-center md:justify-center gap-2 px-4 whitespace-nowrap">
                    {finalCircles.map((imageUrl, idx) => (
                        <div
                            key={idx}
                            className="w-14 h-14 flex-shrink-0 rounded-full border-2 border-white border-dashed bg-cover bg-center"
                            style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}

export default BuildAbox;
