import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import {logo} from './assets'
import { Home } from './pages'
import { CreatePost } from './pages'
import { Profiles } from './pages'

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-gray-200'>
  <div className="flex items-center">
    <Link to='/'>
      <img src={logo} alt='logo' className='w-28 object-contain' />
    </Link>
  </div>
  <div className="flex items-center">
    <Link to="/profiles">
      <img src="https://res.cloudinary.com/dfqziqcfa/image/upload/v1678270624/samples/animals/kitten-playing.gif" alt="Profile image" className="w-20 h-20 rounded-full mr-4" />
    </Link>
    <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create new post</Link>
  </div>
</header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] 
    min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </main>
    </BrowserRouter>

  )
}

export default App
