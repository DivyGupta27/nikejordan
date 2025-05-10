import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='flex justify-center gap-4 p-3'>
  <Link
    className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] hover:text-white focus:ring-3 focus:outline-hidden"
    to="mens"
  >
    <span
      className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
    >
      Shop mens
    </span>
  </Link>
  <Link
    className="group inline-block rounded-full bg-gradient-to-r transition from-pink-500 via-red-500 to-yellow-500 p-[1px] hover:text-white focus:ring-3 focus:outline-hidden"
    to="womens"
  >
    <span
      className="block rounded-full bg-white px-8 py-3 text-sm transtion font-medium group-hover:bg-transparent"
    >
      Shop womens
    </span>
  </Link>
  </div>
  )
}

export default Button