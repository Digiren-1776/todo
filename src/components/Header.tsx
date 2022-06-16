import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className='bg-black p-4 mb-8'>
      <h1 
      className='font-mukta bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-700 text-4xl text-center'>Notes App</h1>
    </div>
  );
}

export default Header;