import React from 'react'
import Footer from '../Components/Footer'
import imgbg from '../assets/imgbg.png'
import imgnobg from '../assets/imgnobg.png'

const Result = () => {
  return (
    <div>
      <div className="flex justify-center items-start mt-8">
        <div className="flex flex-col items-center mx-8">
          <span className="mt-5 text-xl font-serif text-slate-700 ">Original image</span>
          <img src={imgbg} className="mt-5 w-96" style={{ height: '494px' }}/>
        </div>
        <div className="flex flex-col items-center mx-8">
          <span className="mt-5 text-xl font-serif text-slate-700">background removed</span>
          { /*<img src={imgnobg}  className="mt-5 w-96" /> */}
{/* <img src={imgnobg} className="mt-5 w-96" /> */}
<div className=' flex border border-gray-500 w-96 mt-5 bg-layer' style={{ height: '494px' }}>
<div className=' ml-50 pt-56'>
  <span className="loading loading-spinner text-primary"></span>
</div>

</div>

        </div>
      </div>
      <div  className='flex'>
      <div className='ml-auto mb-44 mt-8'>
      <button className='border border-blue-800 text-blue-800 mr-20 p-4 px-5 rounded-2xl active:translate-0.5'>Try another image</button>
      <button className='bg-amber-500 mr-80 p-4 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-400 text-white active:translate-0.5'>Download image</button>
      </div>
      </div>
    </div>
  )
}

export default Result
