'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ImageButton from 'shared/components/molecules/ImageButton';
import Text from 'shared/components/atoms/Text';

const LoginModal = ({ img1, img2, img3 }) => {
  const [popupopen, setPopupopen] = useState(false);
  const handleClick = () => {
    setPopupopen(false);
  };
  return (
    <>
      {popupopen && (
        <div className=" bg-gray-900 bg-opacity-30  fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="  w-1/2  flex flex-col  gap-4 items-center justify-center bg-white rounded-3xl p-7 z-50">
            <Image
              src={img1}
              width={6}
              height={6}
              className="w-6 h-6"
              onClick={handleClick}
              alt='image'
            />

            <Image
              src={img2}
              width={10}
              height={10}
              className="w-10 h-10 rounded-xl"
              alt='image'
            />
            <Text style="room-text" label="Don't Miss Hub Conversation" />
            <Text
              style="signup text"
              label="People on myworld can solve any problem with best experts"
            />
            <ImageButton text={'Sign Up with Google'} img={img3} />
            <ImageButton text={'Sign Up with Phone or Email'} />
            <div className="w-2/3 text-center">
              <Text
                style="signup text"
                label="By continuing you are agree to MYworld's terms and conditions and privacy policy including cookies policy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
