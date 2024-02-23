import React from 'react'
import Image from 'next/image'
import Text from '../atoms/Text'
import PropTypes from 'prop-types';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg' 

const StreamFollowCard = ({imgSrc, name}) => {
  return (
    <div className='flex items-center gap-3 py-2'>
      {imgSrc && <Image src={imgSrc} width={40} height={40} alt='user'/>}
      <Text label={name} style='myspace-name'/>
      <Text label='Follow' style='follow-text1'/>
    </div>
  )
}

StreamFollowCard.defaultProps = {
    imgSrc: ic_user_defolt_avator,
    name: 'username'
}

StreamFollowCard.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string
}

export default StreamFollowCard
