import React from 'react'
import hero from '../assets/hero.png'
import { Upload } from 'lucide-react'

const Hero = () => {
  return (
    <div className='bg-base-200'>
      <div className="hero bg-base-200 min-h-screen px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center max-w-7xl w-full gap-8 lg:gap-16">
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl h-auto"
            />
          </div>
          <div className="flex-1 mt-8 lg:mt-0 text-center lg:text-left px-2 sm:px-4 lg:px-0">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight">
                Remove the
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Background
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">
                  from
                </h1>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight">
                images
              </h1>
            </div>
            <p className="py-4 sm:py-6 text-slate-700 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed">
              Remove backgrounds from your images instantly with AI-powered precision. Perfect for e-commerce, social media, and professional photography.
            </p>
            <div className="flex justify-center lg:justify-start mt-6 sm:mt-8">
              <input type="file" id="upload1" hidden />
              <label
                htmlFor="upload1"
                className="btn btn-primary px-4 sm:px-6 lg:px-9 py-2 sm:py-3 rounded-3xl bg-gradient-to-l from-purple-700 to-pink-600 hover:translate-x-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Upload your image</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
