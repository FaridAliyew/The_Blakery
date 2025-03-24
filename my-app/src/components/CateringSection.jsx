import React from 'react'

function CateringSection() {
    return (
        <section className="catering text-white text-center mt-20">
            <p
                className="uppercase text-[20px] mb-8"
                style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}
            >
                Order The Blakery for your Next Event
            </p>
            <h1
                className="uppercase text-5xl mb-10"
                style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}
            >
                The Blakery Caters
            </h1>
            <button
                className="border-2 text-[20px] border-white w-1/5 h-13 rounded-[8px] hover:bg-white hover:text-black cursor-pointer"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
                CATERING MENU
            </button>
        </section>
    )
}

export default CateringSection
