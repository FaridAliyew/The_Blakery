import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PiStarFourFill } from "react-icons/pi";
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';

function Carusel() {
    const slides = [
        {
            title: '"COOKIES WERE BUSSIN!!!"',
            description: `"BRUUUHHH softer than a stripper's a**!!! Gooey chocolate, chewy marshmallows AND THAT SLAM DUNK'D????? THAT GLAZED GOODNESS??? Man look...just order already!"`,
            author: 'VANESSA C.',
            image: slide4,
        },
        {
            title: '"BEST COOKIES EVER!"',
            description: `"I can't stop eating them! So fresh, so delicious. Definitely ordering again!"`,
            author: 'MICHAEL B.',
            image: slide2,
        },
        {
            title: '"Crazy good cookies"',
            description: `"These cookies are crazy delicious, so creative, so soft and chewy. My office staff could not eat enough. These cookies are not small, they can definitely be shared between 2 or 3 people. Will order again."`,
            author: 'ZEKE F.',
            image: slide1,
        },
        {
            title: '"AMAZİNG!"',
            description: `I have tried multiple cookie dealers and none of them can compare to Blakery. The best part is that they can go in the freezer for later consumption.`,
            author: 'KENJI P.',
            image: slide5,
        },
        {
            title: '"The Perfect Colleague Holiday Treat Gift to Give"',
            description: `"Totally decadent, delicious and made for a fantastic Holiday gift to give a colleague. Thank you Blakery for a fun, yummy treat!"`,
            author: 'RYAN H.',
            image: slide3,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const nextSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 300);
        setTimeout(() => {
            setTransitioning(false);
        }, 600);
    };

    const prevSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            );
        }, 300);
        setTimeout(() => {
            setTransitioning(false);
        }, 600);
    };

    return (
        <section className="carusel w-full  text-white py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

                <div className="md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start space-y-4">

                    <div
                        className={`
              transition-opacity 
              duration-700 
              ease-in-out 
              ${transitioning ? 'opacity-0' : 'opacity-100'}
            `}
                    >
                        <div className='flex starts mb-7 justify-center md:justify-start'>
                            <PiStarFourFill className='text-[10px]' /><PiStarFourFill className='text-[15px] mx-7' /><PiStarFourFill className='text-[20px]' /><PiStarFourFill className='text-[15px] mx-7' /><PiStarFourFill className='text-[10px]' />
                        </div>
                        <h2 className="text-3xl md:text-5xl uppercase font-bold">
                            {slides[currentSlide].title}
                        </h2>
                        <p className="text-base md:text-2xl mt-4">
                            {slides[currentSlide].description}
                        </p>
                        <p className="uppercase font-semibold tracking-wide mt-2">
                            {slides[currentSlide].author}
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
                        <button
                            onClick={prevSlide}
                            className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-colors"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-colors"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="hidden md:block md:w-3/6">
                    <div
                        className={`
              transition-opacity 
              duration-700 
              ease-in-out 
              delay-200
              ${transitioning ? 'opacity-0' : 'opacity-100'}
            `}
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt="Slide"
                            className="w-full h-auto rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carusel;
