import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { logo } from './assets';
import { Home } from './pages';
import { CreatePost } from './pages';
import { Premium } from './pages';
 
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
} from '@clerk/clerk-react';
 
const clerkPubKey = 'pk_test_Y29oZXJlbnQtZXNjYXJnb3QtMi5jbGVyay5hY2NvdW50cy5kZXYk';

const remaining_token = 0;

const shouldFlash = remaining_token < 10;

if (!clerkPubKey) {
  throw new Error('You must provide a Clerk public API key.');
} else {
  console.log('Nice.');
}
 
const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-gray-200'>
          <div className='flex items-center space-x-4'>
            <Link to='/'>
              <img src={logo} alt='logo' className='w-28 object-contain' />
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <SignedIn>
              <Link
                to='/create-post'
                className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:shadow-md transition duration-300 ease-in-out'
              >
                Create new post
              </Link>
              <Link
                to='/premium'
                className={`font-inter font-medium ${shouldFlash ? 'animate-flash' : 'text-[#ff3131]'}`}
              >
                Remaining token: {remaining_token}
              </Link>
              
              <UserButton 
                appearance={{
                  elements: {
                    userButtonBox: "w-14 h-14 rounded-full overflow-hidden hover:scale-110 transform transition-transform duration-300 ",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <Link to='/sign-in' className='font-inter font-medium text-[#6469ff]'>
                Sign in now to start posting
              </Link>
            </SignedOut>
          </div>
        </header>


 
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/sign-in/*' element={<div className='w-max mx-auto mt-12'><SignIn routing='path' path='/sign-in' signUpUrl='/sign-up'/></div> } />
            <Route path='/sign-up/*' element={<div className='w-max mx-auto mt-12'><SignUp routing='path' path='/sign-up' signInUrl='/sign-in'/></div>} />
            <Route path='/premium' element={<Premium />} />
          </Routes>
        </main>
        
      </BrowserRouter>
    </ClerkProvider>
  );
};
 
export default App;