import React from 'react'
import { Link } from 'react-router-dom'

const Profiles = () => {
  return (
    <div>
        <h1>Profiles</h1>
        {/* create a circle of profile images */}
        <img src="https://res.cloudinary.com/dfqziqcfa/image/upload/v1678270632/cld-sample.jpg" alt="Profile image" className="w-40 h-40 rounded-full mr-4" />
    </div>
  )
}

export default Profiles