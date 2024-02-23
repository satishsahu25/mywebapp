import React from 'react'
import Text from './Text'
import PropTypes from 'prop-types'

const StyleClasses = {
    sent : 'bg-blue-400 p-2 rounded-lg w-fit h-fit rounded-br-none',
    recieved: 'bg-gray-300 p-2 rounded-lg w-fit h-fit  rounded-bl-none'
}

const Message = ({text, isSent}) => {
  return (
    <div className={isSent?`${StyleClasses.sent}`:`${StyleClasses.recieved}`}>
      <Text label={text}/>
    </div>
  )
}

Message.propTypes = {
    text: PropTypes.string,
    isSent: PropTypes.bool
}

export default Message
