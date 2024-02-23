import React from 'react';
import Button from 'shared/components/atoms/Button';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
// import Google from 'shared/myworld-image/google.png';
import PropTypes from 'prop-types';
const ImageButton = ({ img, text }) => {
  return (
    <div>
      <button className="flex items-center py-2 px-8 gap-8 border border-gray-100 rounded-full">
        {img && (
          <Image
            src={img}
            alt="google"
            width={10}
            height={10}
            className="w-7 h-7"
          />
        )}

        <Text label={text} style={'sign up with google'} />
      </button>
    </div>
  );
};

ImageButton.propTypes = {
  img: PropTypes.string,
};

export default ImageButton;
