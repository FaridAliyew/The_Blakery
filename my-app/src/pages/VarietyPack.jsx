import React from 'react';
import Slider from 'react-slick';
import { PiStarFourFill } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/slide4.png';
import img2 from '../images/slide2.png';
import img3 from '../images/main-img1.png';

function VarietyPack() {
    const images = [img1, img2, img3];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false,
    };

    return (
        <section className="min-h-screen text-gray-800 p-4 golden-collection">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="p-4 rounded shadow-sm flex flex-col items-center relative">
                    <Slider {...settings} className="w-full h-96 slick-white-dots">
                        {images.map((imgSrc, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center w-full h-96 overflow-hidden"
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Cookie Slide ${idx}`}
                                    className="object-contain max-h-full mx-auto"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="p-6 mt-15 rounded shadow-sm flex flex-col justify-between">
                    <div>
                        <h1 className="text-white text-3xl font-bold uppercase mb-2">
                            Variety Pack
                        </h1>
                        <div className="flex items-center space-x-2 text-white mb-4">
                            <PiStarFourFill />
                            <PiStarFourFill />
                            <PiStarFourFill />
                            <PiStarFourFill />
                            <PiStarFourFill />
                        </div>

                        <span className="text-xl font-semibold text-white mb-4 me-2">$82.00</span>
                        <span className="text-sm line-through text-gray-500">$60.00</span>
                        <p className="text-white mt-5 w-3/4">
                            Twelve tantalizing cookies that'll seduce your taste buds and
                            leave you craving for more. From flirtatious classics to daring
                            delights, this collection will have you saying 'oui oui' to every
                            bite.
                        </p>
                    </div>

                    <div className="mt-4">
                        <button className="w-2/3 cursor-pointer bg-white text-black py-3 rounded font-bold hover:bg-[#3e3d3d] hover:text-white transition">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

            <h1 className="text-white text-center mt-52 text-2xl md:text-4xl lg:text-6xl uppercase">
                Customer Photos
            </h1>
        </section>
    );
}

export default VarietyPack;
