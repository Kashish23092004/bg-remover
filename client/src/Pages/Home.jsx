import React from 'react'
import Hero from '../Components/Hero'
import Steps from '../Components/Steps'
import Image from '../Components/Image'
import { Upload } from 'lucide-react'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <Image/>
     <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-96 flex justify-center mt-6'>
      <input type='file' id='upload1' hidden />
                            <label htmlFor='upload1' className="btn btn-primary px-4 sm:px-6 md:px-9 rounded-3xl bg-gradient-to-l from-purple-700 to-pink-600 hover:translate-x-0.5 w-full max-w-xs sm:max-w-none sm:w-auto">
                                <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="text-sm sm:text-base">upload your image</span>
                            </label>
     </div>
    </div>
  )
}

export default Home