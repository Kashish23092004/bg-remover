import React, { useState } from 'react'
import imgbg from '../assets/imgbg.png'
import imgnobg from '../assets/imgnobg.png'

const Image = () => {
  const [sliderposition, setsliderposition] = useState(50);
  const handlesliderchange = (e) => {
    setsliderposition(e.target.value); // save slider position
  }

  return (
    <div className="mt-20 sm:mt-28 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-center bg-gradient-to-l from-slate-800 to-slate-600 bg-clip-text text-transparent">
        Remove background with high <br /> Quality and accuracy
      </h1>

      <div className="relative mt-8 sm:mt-10 w-[90vw] max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] mx-auto">
        <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src={imgbg}
            alt="Background"
            className="absolute top-0.5 left-0 h-full w-full"
            style={{ clipPath: `inset(0 ${100.2 - sliderposition}% 0 0)` }}
          />
          <img
            src={imgnobg}
            alt="No background"
            className="absolute top-0 left-0 h-full w-full"
            style={{ clipPath: `inset(0 0 0 ${sliderposition}%)` }}
          />
        </div>

        {/* Slider placed inside the same relative container */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderposition}
          onChange={handlesliderchange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xs sm:max-w-md z-10 slider"
        />
      </div>
    </div>
  )
}

export default Image
