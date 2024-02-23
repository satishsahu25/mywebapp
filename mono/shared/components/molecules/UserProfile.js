import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';
import PropTypes from 'prop-types';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg';

        // <Button label="Follow" style={style} />
    const FollowSuggestion = ({ imgSrc, label1, label2}) => {
  return (
    <div className={`flex gap-5 p-5 items-center  w-1/3`}>
      <Image src={imgSrc} width={30} height={30} alt="user" />
        <div className={`flex flex-col whitespace-nowrap`}>
          <Text label={label1} style="follow-text1" />
          <Text label={label2} style="follow-text2" />
        </div>
    </div>
  );
};

FollowSuggestion.propTypes = {
  imgSrc: PropTypes.string,
  gap: PropTypes.string,
};

FollowSuggestion.defaultProps = {
  imgSrc: ic_user_defolt_avator,
};

export default FollowSuggestion;
