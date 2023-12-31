'use client';
import Image from 'next/image';
import React from 'react';

const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
      <div
        className='background-light800_darkgradient 
      relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'
      >
        <Image
          src='/assets/icons/search.svg'
          alt='Search'
          width={24}
          height={24}
          className='cursor-pointer'
        />
        <input
          type='text'
          placeholder='Search anything globally...'
          onChange={() => {}}
          className='paragraph-regular placeholder 
          background-light800_darkgradient outline-none border-none focus:border-none'
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
