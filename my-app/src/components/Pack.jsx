import React from 'react';
import img1 from '../images/pack1.png';
import img2 from '../images/pack2.png';
import animation from '../images/animation.gif';

function Pack() {
  return (
    <section className="pack grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 py-8">
      <div className="group relative overflow-hidden h-96 w-full rounded-3xl shadow-lg border-2 border-white">
        <div
          className="
            absolute inset-0
            bg-center bg-cover
            transition-transform duration-800
            group-hover:scale-110
            z-0
          "
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div
          className="
            absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10
          "
        ></div>
        <div
          style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center"
        >
          <p className="text-white text-5xl font-semibold mb-3 drop-shadow-lg">
            6 PACK
          </p>
          <button
            className="
              text-white px-4 border-2 border-white py-2 rounded-[6px]
              transition-colors duration-300
              group-hover:bg-gray-800 group-hover:text-white
               w-2/3 lg:w-1/3 h-14
            "
          >
            BUILD YOUR OWN
          </button>
        </div>
      </div>

      <div className="group relative overflow-hidden h-96 w-full rounded-3xl shadow-lg border-2 border-white">
        <div
          className="
            absolute inset-0
            bg-center bg-cover
            transition-transform duration-800
            group-hover:scale-110
            z-0
          "
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        <div
          className="
            absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10
          "
        ></div>
        <div
          style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center"
        >
          <p className="text-white text-5xl font-semibold mb-3 drop-shadow-lg">
            12 PACK
          </p>
          <button
            className="
              text-white border-2 border-white px-4 py-2 rounded-[6px]
              transition-colors duration-300 w-2/3 lg:w-1/3 h-14
              group-hover:bg-gray-800 group-hover:text-white
            "
          >
            BUILD YOUR OWN
          </button>
        </div>
      </div>

      <div className="group relative overflow-hidden h-96 w-full rounded-3xl shadow-lg border-2 border-white md:col-span-1">
        <div
          className="
            absolute inset-0
            bg-center bg-cover
            transition-transform duration-800
            group-hover:scale-110
            z-0
          "
          style={{ backgroundImage: `url(${animation})` }}
        ></div>
        <div
          className="
            absolute inset-0
            bg-black opacity-50
            transition-opacity duration-300
            group-hover:opacity-0
            z-10
          "
        ></div>
        <div
          style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.6)' }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center"
        >
          <p className="text-white text-5xl font-semibold mb-3 drop-shadow-lg">
            FAN FAVES 6 PACK
          </p>
          <button
            className="
              text-white border-2 border-white rounded-[6px] px-4 py-2
              transition-colors duration-300 w-2/3 lg:w-1/3 h-14
              group-hover:bg-gray-800 group-hover:text-white
            "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pack;
