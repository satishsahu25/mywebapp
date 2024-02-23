import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const Security = () => {
  return (
    <div>
      <Text label="Security and logins" style="room-text" />
      <Text label="Include additional security like two-factor authentication and checking your list of connected devices to keep your account, Hubs and videoconferencing safe. Learn more" />
      <div className="pt-6">
        <Text label="Login options" style="heading" />
        <div className="flex flex-row gap-2 pb-12 justify-between">
          <div>
            <Text label="Use your facebook or google account to" />
            <Text label=" log in to Myworld. Learn more" />
          </div>
          <div className="flex items-center justify-center">
            <Button label="Edit" style={'secondary'} />
          </div>
        </div>
      </div>
      <Text label="App logins" style="heading" />
      <div className="flex flex-row pb-12 justify-between items-center gap-4">
        <div className="whitespace-nowrap">
          <Text label="Keep track of everywhere you have logged in with your Myworld profile and" />
          <Text label="remove access from your apps you are no longer using with Myworld. Learn more" />
        </div>
        <Button label="Edit" style={'secondary'} />
      </div>
      <Text label="Connected devices" style="heading" />
      <div className="flex flex-row pb-12 justify-between">
        <div>
          <Text label="This is a list of devices that have logged into your account. Revoke" />
          <Text label=" access to any device you dont recognize. Learn more" />
        </div>
        <div className="flex items-center justify-center">
          <Button label="Show sessions" style={'secondary'} />
        </div>
      </div>
    </div>
  );
};

export default Security;
