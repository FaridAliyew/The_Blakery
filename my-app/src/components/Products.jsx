import React, { useState, useEffect } from 'react';
import { PiStarFourFill } from "react-icons/pi";
import img1 from '../images/the-golden.png';
import img2 from '../images/shamrocked.png';
import img3 from '../images/cookie-king.png';
import img4 from '../images/rainbow-road.png';
import img5 from '../images/mint-to-be.png';
import img6 from '../images/pb-yay.png';
import img7 from '../images/slam.png';
import img8 from '../images/glamping.png';
import img9 from '../images/bananas.png';
import img10 from '../images/deep-dark.png';
import img11 from '../images/haute-dough.png';
import img12 from '../images/glazed-goodness.png';
import img13 from '../images/the-candy.png';
import img14 from '../images/cookie.png';
import img15 from '../images/prayer.png';
import img16 from '../images/milf.png';
import img17 from '../images/gluten-free.png';

const productImages = {
    "THE GOLDEN COLLECTION": img1,
    "SHAMROCKED": img2,
    "COOKİE KING": img3,
    "RAINBOW ROAD": img4,
    "MINT TO BE": img5,
    "PB & YAY!": img6,
    "SLAM DUNK'D": img7,
    "LET'S GO GLAMPING!": img8,
    "BANANAS 4 BREAD": img9,
    "DEEP DARK SECRET": img10,
    "HAUTE DOUGH-TRUE": img11,
    "GLAZED GOODNESS": img12,
    "THE CANDY LOVER": img13,
    "Cookie Ménage": img14,
    "THE CINNER'S PRAYER": img15,
    "MILF": img16,
    "GLUTEN FREE MILF": img17
};

const products = [
    { title: "THE GOLDEN COLLECTION", stars: [10, 15, 20, 15, 10] },
    { title: "SHAMROCKED", stars: [10, 15, 20, 15, 10] },
    { title: "COOKİE KING", stars: [10, 15, 20, 15, 10] },
    { title: "RAINBOW ROAD", stars: [10, 15, 20, 15, 10] },
    { title: "MINT TO BE", stars: [10, 15, 20, 15, 10] },
    { title: "PB & YAY!", stars: [10, 15, 20, 15, 10] },
    { title: "SLAM DUNK'D", stars: [10, 15, 20, 15, 10] },
    { title: "LET'S GO GLAMPING!", stars: [10, 15, 20, 15, 10] },
    { title: "BANANAS 4 BREAD", stars: [10, 15, 20, 15, 10] },
    { title: "DEEP DARK SECRET", stars: [10, 15, 20, 15, 10] },
    { title: "HAUTE DOUGH-TRUE", stars: [10, 15, 20, 15, 10] },
    { title: "GLAZED GOODNESS", stars: [10, 15, 20, 15, 10] },
    { title: "THE CANDY LOVER", stars: [10, 15, 20, 15, 10] },
    { title: "Cookie Ménage", stars: [10, 15, 20, 15, 10], uppercase: true },
    { title: "THE CINNER'S PRAYER", stars: [10, 15, 20, 15, 10] },
    { title: "MILF", stars: [10, 15, 20, 15, 10] },
    { title: "GLUTEN FREE MILF" }
];

function Products() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [fade, setFade] = useState(1);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const fadeDuration = 200;

    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const previewSize =
        windowSize.width < 640 ? 200 : windowSize.width < 1024 ? 220 : 260;

    const handleMouseEnter = (productTitle) => {
        const newImage = productImages[productTitle];
        if (newImage) {
            if (hoveredImage && hoveredImage !== newImage) {
                setFade(0);
                setTimeout(() => {
                    setHoveredImage(newImage);
                    setFade(1);
                }, fadeDuration);
            } else if (!hoveredImage) {
                setHoveredImage(newImage);
                setFade(1);
            }
        }
    };

    const handleMouseLeave = () => {
        setFade(0);
        setTimeout(() => {
            setHoveredImage(null);
        }, fadeDuration);
    };

    const handleMouseMove = (e) => {
        setCoords({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="products flex justify-center mt-20 relative">
            <div className="text-white text-center">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className={`relative ${idx !== 0 ? 'mt-4' : ''}`}
                        onMouseEnter={() => handleMouseEnter(product.title)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        style={{ cursor: productImages[product.title] ? 'none' : 'auto' }}
                    >
                        <p
                            className={`
                text-4xl sm:text-5xl md:text-6xl
                transition-colors
                duration-200
                hover:text-[#363535]
                ${product.uppercase ? 'uppercase' : ''}
              `}
                        >
                            {product.title}
                        </p>
                        {product.stars && (
                            <div className="flex justify-center mt-8">
                                {product.stars.map((size, sIdx) => (
                                    <PiStarFourFill
                                        key={sIdx}
                                        className={`text-[${size}px] ${sIdx % 2 === 1 ? "mx-6" : ""}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {hoveredImage && (
                <img
                    src={hoveredImage}
                    alt="Preview"
                    className="pointer-events-none z-50"
                    style={{
                        position: 'fixed',
                        left: coords.x,
                        top: coords.y,
                        width: `${previewSize}px`,
                        height: `${previewSize}px`,
                        border: '2px solid white',
                        borderRadius: '20px',
                        transform: 'translate(-50%, -50%)',
                        opacity: fade,
                        transition: `opacity ${fadeDuration}ms ease-in-out`
                    }}
                />
            )}
        </section>
    );
}

export default Products;
