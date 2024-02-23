import React from 'react'
import Input from 'shared/components/atoms/Input';
import Text from 'shared/components/atoms/Text';
import Button from 'shared/components/atoms/Button';

const EnterConversation = () => {
  return (
    <div className="flex flex-col gap-5">
       <Input hint="Enter you text" style={'default'} />
       <Text label="Room conversation title" style="create1 room" />
      <Text
        style="signup text"
        label="Direct message are private conversations between you and other pople on myworld media, and more!"
      />
      <Button style="success" label="Start a conversation" />
    </div>
  )
}

export default EnterConversation
