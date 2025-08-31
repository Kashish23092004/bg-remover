import React from 'react'
import hero from '../assets/hero.png'
import { Upload } from 'lucide-react'

const Hero = () => {
  return (
    <div className='bg-base-200'>
      <div className="hero bg-base-200 min-h-screen px-4 sm:px-8 md:px-16 ">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl h-auto"
          />
          <div className="mr-0 sm:mr-12 lg:mr-60 mt-8 lg:mt-0 text-center lg:text-left px-2 sm:px-0">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-700">
              Remove the
            </h1>
            <div className="flex justify-center lg:justify-start">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block py-2">
                Background
              </h1>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold ml-1 xs:ml-2 sm:ml-4 text-slate-700">
                from
              </h1>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mt-2.5 text-slate-700">
              images
            </h1>
            <p className="py-3 xs:py-4 sm:py-6 text-slate-700 max-w-md mx-auto lg:mx-0 text-sm xs:text-base">
              Provident cupiditate voluptatem et in.
              <br />
              Quaerat fugiat ut assumenda excepturi exercitationem
              <br />
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="flex justify-center lg:justify-start">
              <input type="file" id="upload1" hidden />
              <label
                htmlFor="upload1"
                className="btn btn-primary px-4 xs:px-6 sm:px-9 rounded-3xl bg-gradient-to-l from-purple-700 to-pink-600 hover:translate-x-0.5 flex items-center gap-2"
              >
                <Upload />
                <span className="text-sm xs:text-base">upload your image</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
