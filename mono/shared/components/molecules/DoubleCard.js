import React from 'react';
import Image from 'next/image';
import Text from 'shared/components/atoms/Text';

const DoubleCard = ({ img1, img2 }) => {
  console.log('width', (1260 / 100) * 14);
  return (
    <div className="flex flex-wrap w-[175px] ">
      <div className="p-2 gap-1 border-2 border-red-400 rounded-full justify-center inline-flex">
        <Image
          src={img1}
          alt="leftimage"
          width={100}
          height={100}
          className="w-20 h-20 rounded-full object-cover"
        />
        <Image
          src={img2}
          alt="rightimage"
          width={100}
          height={100}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="inline-flex flex-wrap">
        <div className="flex">
          <Image
            src={img1}
            width={10}
            alt="image"
            height={10}
            className="w-4 h-4 rounded-full object-cover"
          />
          <Image
            src={img1}
            width={10}
            alt="image"
            height={10}
            className="w-4 h-4 rounded-full object-cover -ml-1"
          />
          <Image
            src={img1}
            width={10}
            alt="image"
            height={10}
            className="w-4 h-4 rounded-full object-cover -ml-1"
          />
        </div>
        <Text
          style="slider-props"
          label="Digital Marketing for Beginners 2022"
        />
        <Text style="slider-props2" label="#Career #Courses #Salary" />
      </div>
    </div>
  );
};

export default DoubleCard;
