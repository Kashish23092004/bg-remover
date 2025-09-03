import React from 'react'
import { Trash } from 'lucide-react'
import { ArrowUpFromLine } from 'lucide-react'
import { ArrowDownToLine } from 'lucide-react'

const Steps = () => {
  return (
    <div>
      <div>
        <h1 className="text-slate-500 text-2xl sm:text-3xl font-bold font-serif text-center mt-12">
          Steps to remove background <br /> image in seconds
        </h1>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20 max-w-6xl mx-auto">
            <div className="card card-dash bg-base-100 w-full shadow-sm">
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title flex items-center gap-2 text-lg sm:text-xl">
                  <ArrowUpFromLine className="w-5 h-5 sm:w-6 sm:h-6" /> Upload image
                </h2>
                <p className="text-sm sm:text-base mt-2">
                  Simply upload your image and let our AI technology handle the rest. Supports JPG, PNG, and other popular formats.
                </p>
              </div>
            </div>

            <div className="card card-dash bg-base-100 w-full shadow-sm">
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title flex items-center gap-2 text-lg sm:text-xl">
                  <Trash className="w-5 h-5 sm:w-6 sm:h-6" /> Remove Background
                </h2>
                <p className="text-sm sm:text-base mt-2">
                  Our advanced AI automatically detects and removes the background with precision, preserving the main subject perfectly.
                </p>
              </div>
            </div>

            <div className="card card-dash bg-base-100 w-full shadow-sm">
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title flex items-center gap-2 text-lg sm:text-xl">
                  <ArrowDownToLine className="w-5 h-5 sm:w-6 sm:h-6" />Download image
                </h2>
                <p className="text-sm sm:text-base mt-2">
                  Download your processed image in high quality. Ready to use for your projects, presentations, or social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
