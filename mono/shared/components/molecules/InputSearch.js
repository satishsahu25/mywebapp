import React from 'react'
import Input from '../atoms/Input'
import Image from 'next/image'
import PropTypes from 'prop-types'

const InputSearch = ({imgSrc,label}) => {
  return (
    <div className='relative flex items-center'> 
      <Image src={imgSrc} height={20} width={20} alt='logo' className='translate-x-6 pl-1'/>
      <Input hint={label} style={'home'}/>
    </div>
  )
}
InputSearch.propTypes = {
    imgSrc: PropTypes.string,
    label:PropTypes.string,
  };
export default InputSearch
