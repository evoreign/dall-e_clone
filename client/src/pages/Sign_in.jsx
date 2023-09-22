import React from 'react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
} from '@clerk/clerk-react';
const clerkPubKey = 'pk_test_Y29oZXJlbnQtZXNjYXJnb3QtMi5jbGVyay5hY2NvdW50cy5kZXYk';
 
if (!clerkPubKey) {
  throw new Error('You must provide a Clerk public API key.');
} else {
  console.log('Nice.');
}
const Signin = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div>Sign-in</div><div className='w-max mx-auto mt-12'>
      <SignIn />
    </div></ClerkProvider>
  );
};

export default Signin