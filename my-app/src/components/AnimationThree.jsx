import React from 'react'
import img1 from '../images/cookies.png'
import img2 from '../images/customize.png'
import img3 from '../images/variety.png'

function AnimationThree() {
    const marqueeText = (
        <>
            <div className="marquee-item">
                <img className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-3xl flex-shrink-0 max-w-none" src={img1} alt="" />
            </div>
            <div className="marquee-item">
                <img className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-3xl flex-shrink-0 max-w-none" src={img2} alt="" />
            </div>
            <div className="marquee-item">
                <img className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-3xl flex-shrink-0 max-w-none" src={img3} alt="" />
            </div>
            <div className="marquee-item">
                <img className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-3xl flex-shrink-0 max-w-none" src={img2} alt="" />
            </div>
        </>
    )

    return (
        <section className="animationThree overflow-x-auto whitespace-nowrap">
            <div className="marquee3">
                <div className="marquee-group">{marqueeText}</div>
                <div className="marquee-group">{marqueeText}</div>
            </div>
        </section>
    )
}

export default AnimationThree
