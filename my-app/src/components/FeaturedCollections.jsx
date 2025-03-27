import React from 'react';
import video from '../assets/mainVideo.mp4';
import img1 from '../images/main-img1.png';
import img2 from '../images/main-img2.png';
import { Link } from "react-router";

function FeaturedCollections() {
  return (
    <section className="w-full mt-20 text-white flex items-center justify-center">
      <div className="h-[80%] flex justify-center">

        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <video
            className="border-2 border-gray-100 rounded-2xl w-[90%] h-auto"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="w-full md:w-[600px] lg:w-4/9 lg:px-0 flex flex-col gap-6">
          <div className="build-box bg-[#383737] border-2 border-gray-100 p-6 rounded-2xl w-full h-full flex justify-center items-center text-center">
            <div style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.6)" }}>
              <h1 className="text-2xl uppercase">ALL YOUR FAVORITES</h1>
              <p className="text-5xl mt-2">BUILD A BOX</p>
              <Link to='build' className="block ms-auto me-auto w-60 h-12 mt-4 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black cursor-pointer transition ">
                SHOP NOW
              </Link>
            </div>
          </div>

          <div className="cursor-pointer order-now relative overflow-hidden group hidden lg:flex border-2 border-gray-100 p-6 rounded-2xl w-full h-full text-center justify-center items-center">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform group-hover:scale-110"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-2xl"></div>
            <div className="relative z-10" style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.6)" }}>
              <h1 className="text-2xl uppercase">6 LIMITED FLAVORS</h1>
              <p className="text-5xl mt-2">THE GOLDEN</p>
              <p className="text-5xl mt-4">COLLECTION</p>
              <Link to='goldenCollection' className="block ms-auto me-auto mt-4 w-60 h-12 group-hover:bg-gray-800 group-hover:text-white px-6 py-2 border border-white rounded-lg transition cursor-pointer">
                ORDER NOW
              </Link>
            </div>
          </div>

          <div className="add-to-cart relative overflow-hidden group hidden lg:flex border-2 border-gray-100 p-6 rounded-2xl w-full h-full text-center justify-center items-center">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform group-hover:scale-110"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-2xl"></div>
            <div className="relative z-10" style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.6)" }}>
              <p className="text-5xl uppercase">VARIETY PACK</p>
              <button className="w-60 group-hover:bg-gray-800 group-hover:text-white h-12 mt-4 px-6 py-2 border border-white rounded-lg transition cursor-pointer">
                ADD TO CART
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
