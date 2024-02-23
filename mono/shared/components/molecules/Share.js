import React from 'react';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';

const Share = ({ img11, img12, img13 }) => {
  return (
    <div className=" w-fit px-10 py-7 flex flex-col gap-9 border rounded-lg shadow-lg  ">
      <Text label="Share link to this page" style="sign up with google" />
      <div className=" flex gap-5">
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={img11} alt='image' width={30} height={30} />
          <Text label="Facebook" style="section-following" />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={img12} alt='image' width={30} height={30} />
          <Text style="section-following" label="Twitter" />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src={img13} alt='image' width={30} height={30} />
          <Text style="section-following" label="Whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Share;
