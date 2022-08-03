import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 flex flex-col items-center justify-center  border-t p-5 text-center">
      <h1 className="text-gray-800 text-base font-semibold">
        © 2022 - Med2Lab Case Simulation All rights reserved | Build with ❤ by{' '}
        <span className="hover:text-violet-600 cursor-pointer font-semibold">
          Med2lab{' '}
        </span>
      </h1>
    </footer>
  )
}

export default Footer
