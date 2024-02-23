import React from 'react';
import Input from 'shared/components/atoms/Input';
import Button from 'shared/components/atoms/Button';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import Dropdown from 'shared/components/atoms/dropdown';
const AccountSettings = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-[100%] flex flex-col gap-4">
        <Text style="chat-head" label="Acccount settings" />
        <Text
          style="create2-text"
          label="Make changes to your email, passwrod, and account type.This information is private and won't show up in your public profile"
        />
        <div className="flex flex-col gap-2">
          <Text style="follow-text2" label="Email address" />
          <Input style={'edit-text'} />
        </div>
        <div className="flex flex-col gap-2">
          <Text style="follow-text2" label="password" />
          <Input style={'edit-text'} />
        </div>
      </div>
      <div className="w-[100%] flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Text style="slider-props" label="Deactivate account" />
            <Text style="create2-text" label="Email address" />
          </div>
          <Button style={'secondary'} label="Deactivate account" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Text style="slider-props" label="Delete your data and account" />
            <Text
              style="create2-text"
              label="Delete your account and account data"
            />
          </div>
          <Button style={'secondary'} label="Delete account" />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
