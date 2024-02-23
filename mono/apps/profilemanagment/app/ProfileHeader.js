'use client'
import React, { useState, useEffect } from 'react';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';

const ProfileHeader = () => {
  const [isScrolled, setIsscrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsscrolled(true);
      } else {
        setIsscrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <div
      className={`flex gap-10 items-center fixed top-0 left-0 px-10 py-3 bg-white w-[100%] first-letter:
    ${isScrolled ? 'border-b-[0.5px] border-slate-200' : ''}
    `}
    >
      <Image src={'/ic_back_arrow.svg'} alt="arrow" width={20} height={20} />
      <Text style="dropdown-text" label="Profile Managment" />
    </div>
  );
};

export default ProfileHeader;
