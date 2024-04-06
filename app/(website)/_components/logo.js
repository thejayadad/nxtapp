import React from 'react'

const Logo = () => {
  return (
    <div className="transition-transform duration-300 hover:scale-110 cursor-pointer">
    <img
    width='60 md:100'
    src="../logo.png"
    fill
    className="object-contain"
    alt="Reading"
  />
    </div>
  )
}

export default Logo