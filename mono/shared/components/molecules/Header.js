'use client';
import React, { useState, useEffect } from 'react';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import Share from 'shared/components/molecules/Share';
import PropTypes from 'prop-types';
const Header = ({
  img1,
  img2,
  img11,
  img12,
  img13,
  style,
  headerName,
  styleName,
}) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, [isScrolled]);

  return (
    <div
      className={`flex ${style} ${
        isScrolled ? ' border-b-[0.5px] border-slate-200 pb-4' : ''
      } `}
    >
      <Text style={styleName} label={headerName} />
      <div className="flex gap-5 relative">
        {img1 && (
          <Image src={img1} alt='image' width={30} height={30} onClick={handleClick} />
        )}
        {img2 && <Image src={img2} alt='image' width={30} height={30} />}
        {modal && (
          <div className=" absolute top-9 right-5">
            <Share img11={img11} img12={img12} img13={img13} />
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  headerName: PropTypes.string,
};

Header.defaultProps = {
  headerName: 'Header',
};

export default Header;
