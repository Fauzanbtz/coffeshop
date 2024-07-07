import React from 'react'


const NavbarMenu = (props) => {
  const {className} = props;
  return (
    <div className={`flex justify-around items-center py-5 ${className}`}>
      <img src="../src/assets/logo.png" alt="" className="w-10" />
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search coffee"
          className="input input-bordered w-auto md:w-80 md:w-autow-80 border border-black"
        />
        <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
    </div>
  )
}

export default NavbarMenu