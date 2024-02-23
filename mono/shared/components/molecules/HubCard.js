import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg' 

const HubCard = ({thumbnail, profilePic}) => {
  return (
    <div className="bg-black flex gap-5">
      <div className="bg-rose-500 rounded-xl">
        <Image src={thumbnail} width={250} height={150} alt="hub video" />
      </div>
      <div className="bg-rose-300 space-y-1">
        <div className='flex gap-3 items-center'>
          <Image src={profilePic} width={20} height={20} alt='profile'/>
          <Text label="Rondy Ros" style="myspace-name" />
        </div>
        <Text label="The Ottoman Empire Season" />
        <Text label="22k views" style="follow-text1" />
      </div>
    </div>
  );
};

HubCard.propTypes = {
  thumbnail: PropTypes.string,
  profilePic: PropTypes.string
}

HubCard.defaultProps = {
  thumbnail: '',
  profilePic: ic_user_defolt_avator
}

export default HubCard;
