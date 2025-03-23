import React from 'react'
import img1 from '../images/king.png'
import img2 from '../images/shamrockedd.png'
import img3 from '../images/customize.png'
import img4 from '../images/variety.png'

function ProductShowcase() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 px-4 md:px-8 gap-4 mt-10">
      <div className="relative group h-96 w-full overflow-hidden rounded-3xl border-2 border-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 "
          style={{ backgroundImage: `url(${img1})` }}
        />
        <div className="absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10" />
        <div style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <p className='text-2xl'>Cookie of The Month</p>
          <p className="text-5xl font-bold">COOKIE KING</p>
          <button className="mt-4 px-4 py-2 border-2 border-white rounded-[6px] text-white w-2/3 lg:w-2/4 h-14  transition-colors duration-300 group-hover:bg-gray-700">
            TRY IT NOW
          </button>
        </div>
      </div>

      <div className="relative group h-96 w-full overflow-hidden rounded-3xl border-2 border-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div className="absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10" />
        <div style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <p className='text-2xl'>Cookie of The Month</p>
          <p className="text-5xl font-bold">SHAMROCKED</p>
          <button className="mt-4 px-4 py-2 border-2 border-white text-white rounded-[6px] w-2/3 lg:w-2/4 h-14  transition-colors duration-300 group-hover:bg-gray-700">
            TRY IT NOW
          </button>
        </div>
      </div>

      <div className="relative group h-96 w-full overflow-hidden rounded-3xl border-2 border-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${img3})` }}
        />
        <div className="absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10" />
        <div style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <p className='text-2xl'>Special Order?</p>
          <p className="text-5xl font-bold">CUSTOMIZE</p>
          <button className="mt-4 px-4 py-2 border-2 border-white text-white rounded-[6px] w-2/3 lg:w-2/4 h-14 transition-colors duration-300 group-hover:bg-gray-700">
            SUBMIT A REQUEST
          </button>
        </div>
      </div>

      <div className="relative group h-96 w-full overflow-hidden rounded-3xl border-2 border-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${img4})` }}
        />
        <div className="absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10" />
        <div style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <p className='text-2xl uppercase'>Pre-Built Box</p>
          <p className="text-5xl font-bold">VARIETY</p>
          <button className="mt-4 px-4 py-2 border-2 border-white rounded-[6px] w-2/3 lg:w-2/4 h-14 text-white transition-colors duration-300 group-hover:bg-gray-700">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
