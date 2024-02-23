import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Text from 'shared/components/atoms/Text';
const RecommendedCard = ({ img, img1 }) => {
  return (
    <div className="relative">
      <div className='w-[300px] h-[400px]'>
        <Image
          src={img}
          width={200}
          height={400}
          alt="img"
          className=" w-full h-full rounded-lg"
        />
      </div>

      <div className="flex gap-1 absolute left-3 bottom-10 z-10">
        <Image
          src={img1}
          alt='image'
          width={36}
          height={36}
          className="w-7 h-7 outline border border-black rounded-full"
        />
        <Text style="expert-tag" label="Rondy Ros" className="text-white" />
      </div>
    </div>
  );
};

RecommendedCard.propTypes = {
  img: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
};
export default RecommendedCard;
