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
        <div className="flex flex-col sm:flex-row mt-12 sm:mt-20">
          <div className="card card-dash bg-base-100 w-full sm:w-80 md:w-96 mx-auto sm:mx-8 md:mx-28 mb-8 sm:mb-0">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <ArrowUpFromLine /> Upload image
              </h2>
              <p>
                A card component has a figure, a body part, and inside body there are title and actions parts
              </p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full sm:w-80 md:w-96 mx-auto sm:mx-8 md:mx-28 mb-8 sm:mb-0">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <Trash /> Remove Background
              </h2>
              <p>
                A card component has a figure, a body part, and inside body there are title and actions parts
              </p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full sm:w-80 md:w-96 mx-auto sm:mx-8 md:mx-28">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <ArrowDownToLine />Download image
              </h2>
              <p>
                A card component has a figure, a body part, and inside body there are title and actions parts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
