import React from 'react'
import { Link } from 'react-router-dom'

const Profiles = () => {
  return (
    <div className='relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 
    break-words bg-white dark:bg-gray-200 md:max-w-sm rounded-xl'>
        <h1>Profiles</h1>
        {/* create a circle of profile images */}
        <img src="https://res.cloudinary.com/dfqziqcfa/image/upload/v1678270632/cld-sample.jpg" alt="Profile image" className="w-40 h-40 rounded-full mr-4" />
    </div>
  )
}

export default Profiles