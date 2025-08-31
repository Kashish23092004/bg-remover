import React from 'react'
import { MoveRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm px-4 sm:px-8">
        <div className="flex-1 ml-4 sm:ml-14 flex items-center gap-2">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flower_svg_-_Sketch_10.svg/768px-Flower_svg_-_Sketch_10.svg.png?20201120174243"
            alt="Logo"
          />
          <a className="btn btn-ghost text-lg sm:text-xl">
            <i>Bg-remover</i>
          </a>
        </div>
        <div className="flex gap-2 mr-4 sm:mr-14">
          {isSignedIn ? (
            <div>
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="btn btn-wide bg-black text-white rounded-3xl mr-2 sm:mr-16"
            >
              Get Started <MoveRight />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
