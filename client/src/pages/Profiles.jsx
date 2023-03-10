import React from 'react'
import { Link } from 'react-router-dom'

const Profiles = () => {
  return (
    <div className='relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 
    break-words bg-white dark:bg-gray-200 md:max-w-sm rounded-xl flex flex-col justify-center items-center space-y-4 py-4'>
        {/* create a circle of profile images */}
        <div className="relative">
        <div className="hover:blur-md">
          <img src="https://res.cloudinary.com/dfqziqcfa/image/upload/v1678270632/cld-sample.jpg" alt="Profile image" className="w-40 h-40 rounded-full mr-4" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-gray-800 text-white text-center py-1 px-2 rounded-md opacity-0 hover:opacity-100">Change profile picture</span>
        </div>
      </div>
        <div class="flex flex-col items-center space-y-4">
        <h1 class="text-2xl font-bold">Profiles</h1>
        <div class="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-md">
          <p class="text-lg">Name: John Doe</p>
          <p class="text-lg">Available credits: 100</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy more credits
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profiles