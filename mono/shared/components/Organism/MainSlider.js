'use client';
import React, { useRef } from 'react';
import backarrowright from 'shared/assets/backarrowright.svg';
import Image from 'next/image';
import Text from '../atoms/Text';

const MainSlider = ({sliderData}) => {
  const sliderRef = useRef(null);
  let widthOfContainer = 0;
  const scrollPrev = () => {
    if (sliderRef.current) {
      widthOfContainer = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft -= widthOfContainer;
    }
  };
  const scrollNext = () => {
    if (sliderRef.current) {
      widthOfContainer = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft += widthOfContainer;
    }
  };
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={scrollPrev}
        className="z-10 bg-gray-300 p-4 rounded-full rotate-180"
      >
        <Image src={backarrowright} width={20} height={20} alt="previous" />
      </button>
        <div
          ref={sliderRef}
          className="w-full flex justify-start items-center overflow-hidden relative scroll-smooth"
        >
          {sliderData?.map((data) => {
            return (
              <div key={data.id} className="mx-[25%] min-w-[50%] border rounded-tl-[75px] rounded-tr-[75px]">
                <Image src={data.image_url} width={700} height={400} alt='slider image' className='rounded-tl-[75px] rounded-tr-[75px]'/>
                <Text label={data.description} style='mainslider-desc'/>
                <Text label={data.title} style='mainslider-title'/>
              </div>
            );
          })}
        </div>
      <button
        onClick={scrollNext}
        className="z-10 bg-gray-300 p-4 rounded-full"
      >
        <Image src={backarrowright} width={20} height={20} alt="previous" />
      </button>
    </div>
  );
};

export default MainSlider;
