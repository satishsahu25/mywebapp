import React from 'react'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

const Notification = () => {
  return (
    <div>
      <Text label='Notifications' style='room-text'/>
      <Text label='We will always let you know about important chages, but you pick what else you want to hear about. Learn more'/>
      <div className='pt-6'>
      <Text label='On Myworld' style='heading'/>
      <div className='flex flex-row gap-2 pb-12'>
      <Text label='Pick which notification to see while on the app or on the site.'/>
      <Button label='Edit' style={'secondary'}/>
      </div>
      <Text label='By email' style='heading'/>
      <div className='flex flex-row gap-4 pb-12'>
      <Text label='Pick which notification to get by email.'/>
      <Button label='Edit' style={'secondary'}/>
      </div>
      <Text label='By push notification' style='heading'/>
      <div className='flex flex-row gap-4'>
      <Text label='Pick which notification to get on your phone or computer.'/>
      <Button label='Edit' style={'secondary'}/>
      </div>
      </div>
    </div>
  )
}

export default Notification
