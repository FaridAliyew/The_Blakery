import React from 'react';
import video from '../assets/mainVideo.mp4';

function FeaturedCollections() {
  return (
    <section className="w-full text-white flex items-center justify-center">
      <div className="w-5/6 h-[80%] flex">
        
        <div className="w-1/2 flex items-center justify-center">
          <video
            className="border-2 border-gray-600 rounded-2xl w-[90%] h-auto"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
            Sizin brauzeriniz video dəstəkləmir.
          </video>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          
          <div className="bg-[#2a2a2a] border border-gray-700 p-6 rounded-2xl w-3/4 text-center">
            <h1 className="text-sm uppercase">ALL YOUR FAVORITES</h1>
            <p className="text-2xl mt-2">BUILD A BOX</p>
            <button className="mt-4 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
              SHOP NOW
            </button>
          </div>

          <div className="bg-[#2a2a2a] border border-gray-700 p-6 rounded-2xl w-3/4 text-center">
            <h1 className="text-sm uppercase">6 LIMITED FLAVORS</h1>
            <p className="text-2xl mt-2">THE GOLDEN COLLECTION</p>
            <button className="mt-4 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
              ORDER NOW
            </button>
          </div>

          <div className="bg-[#2a2a2a] border border-gray-700 p-6 rounded-2xl w-3/4 text-center">
            <h1 className="text-sm uppercase">VARIETY PACK</h1>
            <button className="mt-4 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
              ADD TO CART
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
