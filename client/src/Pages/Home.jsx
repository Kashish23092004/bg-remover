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
     <div className='mx-96 flex justify-center mt-6'>
      <input type='file' id='upload1' hidden />
                            <label htmlFor='upload1' className="btn btn-primary px-9 rounded-3xl bg-gradient-to-l from-purple-700 to-pink-600 hover:translate-x-0.5  xs:mx-6 sm:mx-9 ">
                                <Upload />upload your image
                            </label>
     </div>
    </div>
  )
}

export default Home