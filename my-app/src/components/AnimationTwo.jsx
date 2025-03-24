import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function AnimationTwo() {
    const marqueeText = (
        <>
            <span className="marquee-item">
                FOLLOW US ON INSTAGRAM <FaInstagram className="ms-13 text-2xl" />
            </span>
            <span className="marquee-item">
                FOLLOW US ON INSTAGRAM <FaInstagram className="ms-13 text-2xl" />
            </span>
            <span className="marquee-item">
                FOLLOW US ON INSTAGRAM <FaInstagram className="ms-13 text-2xl" />
            </span>
            <span className="marquee-item">
                FOLLOW US ON INSTAGRAM <FaInstagram className="ms-13 text-2xl" />
            </span>
            <span className="marquee-item">
                FOLLOW US ON INSTAGRAM <FaInstagram className="ms-13 text-2xl" />
            </span>
            <span className="marquee-item">
                FOLLOW US ON INSTAGRAM <FaInstagram className="ms-13 text-2xl" />
            </span>
        </>
    );

    return (
        <section className="animation marquee-container mt-20">
            <div className="marquee">
                <div className="marquee-group">{marqueeText}</div>
                <div className="marquee-group">{marqueeText}</div>
            </div>
        </section>
    );
}

export default AnimationTwo
