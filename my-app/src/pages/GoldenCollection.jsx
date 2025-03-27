import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/main-img2.png';
import img2 from '../images/the-golden.png';
import img3 from '../images/shamrocked.png';
import img4 from '../images/the-golden2.png';
import img5 from '../images/the-golden3.png';
import img6 from '../images/creamy-dream.png';
import img7 from '../images/cookie-king.png';
import img8 from '../images/glamping.png';

function GoldenCollection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [selectedPack, setSelectedPack] = useState(6);
  const price = selectedPack === 6 ? 50 : 82;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,    
    arrows: false, 
    autoplay: false,
  };

  const handlePackClick = (packNumber) => {
    setSelectedPack(packNumber);
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
                  alt={`Golden Cookie ${idx}`}
                  className="object-contain max-h-full mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="p-6 rounded shadow-sm flex flex-col justify-between">
          <div>
            <h1 className="text-white text-3xl font-bold uppercase mb-2">
              The Golden Collection
            </h1>
            <div className="flex items-center space-x-1 text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <p className="text-xl font-semibold text-white">
                ${price.toFixed(2)}
              </p>
              {selectedPack === 6 ? (
                <p className="text-sm line-through text-gray-500">$60.00</p>
              ) : (
                <p className="text-sm line-through text-gray-500">$99.00</p>
              )}
            </div>

            <div className="text-white mt-10">
              <h1 className="font-bold mb-3">Shamrocked</h1>
              <p>Chocolate dough with crunchy pistachios, stuffed with smooth pistachio creme. Rich, nutty, and dangerously delicious—it’ll leave you feeling shamrocked.</p>

              <h1 className="font-bold my-3">Rainbow Road</h1>
              <p>Take a ride on the wild side with this cosmic brownie cookie. A double chocolate cookie stuffed with hot fudge and topped with playful rainbow chips, it’s a sweet journey you’ll never want to end. Warning: One bite might just lead to a craving that’s out of this world.</p>

              <h1 className="font-bold my-3">Gold Digger</h1>
              <p>Crunchy pretzels, toffee, and caramel Belgian chocolate all stuffed with gooey caramel and topped with flaky sea salt. For those who know how to dig for treasure… and pleasure.</p>

              <h1 className="font-bold my-3">Mint To Be</h1>
              <p>This cookie was mint for you. Packed with crunchy Mint Oreos, melty white chocolate chips, and a sinful mix of semi-sweet and bittersweet chocolate chips, every bite is a decadent explosion of chocolatey minty goodness. But it doesn’t stop there—it’s stuffed with a creamy Mint Oreo buttercream frosting that’ll have you falling head over heels. One bite, and you’ll know it was always Mint to Be.</p>

              <h1 className="font-bold my-3">Cookie King</h1>
              <p>Inspired by the King Cake, a Snickerdoodle dough with coffee cake pieces, stuffed with rich cream cheese frosting. A sweet, royal indulgence worthy of the cookie crown.</p>

              <h1 className="font-bold mt-3">Get Lucky</h1>
              <p>Lucky Charms cereal-infused dough with gooey marshmallow fluff, topped with a Lucky Charms Krispie treat. So magically delicious, it’ll have you feeling lucky all night long.</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => handlePackClick(6)}
                className={`
                  border-2 px-4 py-2 rounded transition
                  ${selectedPack === 6
                    ? 'border-black bg-black text-white'
                    : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                6 Pack
              </button>
              <button
                onClick={() => handlePackClick(12)}
                className={`
                  border-2 px-4 py-2 rounded transition
                  ${selectedPack === 12
                    ? 'border-black bg-black text-white'
                    : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                12 Pack
              </button>
            </div>
            <button className="w-full bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-white text-center mt-10 text-2xl md:text-4xl lg:text-6xl uppercase">
        Customer Photos
      </h1>
    </section>
  );
}

export default GoldenCollection;
