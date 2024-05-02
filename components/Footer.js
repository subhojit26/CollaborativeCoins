import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-black text-white flex items-center justify-center px-4 h-16'>
      <p className='text-center'>
        &copy; {currentYear} Get me a Chai - All rights reserved!
      </p>
    </div>
  );
};

export default Footer;
