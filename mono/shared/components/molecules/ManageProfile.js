'use client';
import React, { useState } from 'react';
import Input from 'shared/components/atoms/Input';
import Button from 'shared/components/atoms/Button';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import Dropdown from 'shared/components/atoms/dropdown';
import Popup from 'shared/components/Organism/PopUp';

const ManageProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const [image, setImage] = useState('/man.jpg');
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <div className="w-[100%] flex flex-col gap-4">
      <Text style="chat-head" label="Edit profile" />
      <Text
        style="create2-text"
        label="Keep your personal details private.Information you add here is visible to anyone who can view your profile . "
      />
      <Text style="follow-text2" label="photo" />
      <div className="flex gap-10 items-center">
        <Image
          src={image}
          alt="man"
          width={10}
          height={10}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <input
            type="file"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-gray-200 hover:text-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full w-fit"
          >
            Change
          </label>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col gap-2">
          <Text style="follow-text2" label="Forst  name:" />

          <Input style={'edit-text'} hint="sk" />
        </div>
        <div className="flex flex-col gap-2">
          <Text style="follow-text2" label="Last Name" />
          <Input style={'edit-text'} hint="sariful" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Text style="follow-text2" label="About" />

        <Input style={'edit-text'} />
      </div>
      <div onClick={handleClick} className=" cursor-pointer">
        <Text style="create-text3" label="+  Topic of Hub" />
        {isOpen && (
          <div className="z-[100]">
            <Popup />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Text style="follow-text2" label="Pronounce" />

        <Dropdown />
        <Text
          style="follow-text2"
          label="Choose upto two sets of pronouns to appear on your profile so others how to refer you.You can edit or remove this any time"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text style="follow-text2" label="Website" />
        <Input
          style={'edit-text'}
          label="add a link to drive traffic to your site"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text style="follow-text2" label="Username" />
        <Input style={'edit-text'} label="sksarifulislam8" />
      </div>
      <Text style="follow-text2" label="www.pinterst.com/sksarifulislam8" />
    </div>
  );
};

export default ManageProfile;
