import React from 'react';
import Text from 'shared/components/atoms/Text';
import PropTypes from 'prop-types';

const Sectiontag = ({tagTitle, num, numType}) => {
  return (
    <div>
      <Text label={tagTitle} style="signup heading" />
      <Text label={numType==='view'?`${num} views`:numType==='follow'?`${num} Follow`:`${num} video`} style="section-following" />
    </div>
  );
};

Sectiontag.defaultProps = {
  num: 0,
  numType: 'view',
  tagTitle: 'Tag Title'
}

Sectiontag.propTypes = {
  num: PropTypes.number,
  numType: PropTypes.oneOf(['view', 'follow', 'video']),
  tagTitle: PropTypes.string
}

export default Sectiontag;
