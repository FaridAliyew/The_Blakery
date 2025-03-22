import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function Animation() {
  const marqueeText = (
    <>
      <span className="marquee-item">
        AS SEEN ON GORDON RAMSAY'S FOOD STARS <PiStarFourFill className="ms-13"/>
      </span>
      <span className="marquee-item">
        AS SEEN ON GORDON RAMSAY'S FOOD STARS <PiStarFourFill className="ms-13"/>
      </span>
      <span className="marquee-item">
        AS SEEN ON GORDON RAMSAY'S FOOD STARS <PiStarFourFill className="ms-13"/>
      </span>
      <span className="marquee-item">
        AS SEEN ON GORDON RAMSAY'S FOOD STARS <PiStarFourFill className="ms-13"/>
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

export default Animation;
