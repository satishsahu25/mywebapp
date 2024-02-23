import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';

const TopicContentCard = ({img}) => {
  return (
    <div className='border w-[250px] h-[400px] rounded-2xl pb-2'>
      {/* <div className="w-full h-[400px]"> */}
        <Image src={img} width={200} height={350} alt="short video" className='h-[87%] w-full object-cover rounded-t-xl'/>
      {/* </div> */}
      <div>
        <Text label="Rondy Ros" style="follow-text2" />
        <Text label="The Ottoman Empire Season" style="follow-text2" />
        <Text label="22k views" style="follow-text2" />
      </div>
    </div>
  );
};

export default TopicContentCard;
