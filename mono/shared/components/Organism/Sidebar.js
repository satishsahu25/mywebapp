'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Text from 'shared/components/atoms/Text';
import Profile from '../../assets/ic_user_defolt_avator.svg';
import HomeActive from '../../assets/Homeactive.svg';
import HomeInactive from '../../assets/Homeinactive.svg';
import ExploreActive from '../../assets/ic_active_explore.svg';
import ExploreInactive from '../../assets/inactive_explore.svg';
import ChatActive from '../../assets/ic_activechat.svg';
import ChatInactive from '../../assets/ic_inactivechat.svg';
import Notification from '../../assets/inactive_notification.svg';
import Logo from '../../assets/myworldlogo.png';
import MoreOption from '../../assets/ic_more_option.svg';
import Create from '../../assets/ic_create.svg';
import { useRouter } from 'next/navigation';
const Sidebar = () => {
  const router = useRouter();
  const [imageState, setImageState] = useState({
    img1: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
  });
  const handleImageClick = (imgKey) => {
    setImageState((prevState) => ({
      ...Object.keys(prevState).reduce(
        (obj, key) => ({ ...obj, [key]: false }),
        {}
      ),
      [imgKey]: true,
    }));
  };

  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div className=" flex flex-col gap-12 w-[7vw] h-screen fixed items-center border-r py-7">
      <div>
        <Image
          src={Logo}
          alt="Image"
          width={100}
          height={200}
          className="rounded-lg w-8 h-8"
        />
      </div>
      <div className="flex flex-col gap-6 ">
        <Image
          src={imageState.img1 ? HomeActive : HomeInactive}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => {
            handleImageClick('img1');
            router.push('http://localhost:3000');
          }}
        />
        <Image
          src={imageState.img6 ? ExploreActive : ExploreInactive}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => {
            handleImageClick('img6');
            router.push('http://localhost:3002');
          }}
        />

        <Image
          src={imageState.img4 ? ChatActive : ChatInactive}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => {
            handleImageClick('img4');
            router.push('http://localhost:3007');
          }}
        />
        <Image
          src={Profile}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => {
            handleImageClick('img3');
            router.push('http://localhost:3005');
          }}
        />
        <Image
          src={Notification}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={() => {
            handleImageClick('img5');
            router.push('http://localhost:3004');
          }}
        />
        <Image
          src={MoreOption}
          alt="Image"
          width={100}
          height={200}
          className=" w-6 h-6"
          onClick={handleClick}
        />
      </div>
      <div>
        <Image
          src={Create}
          alt="Image"
          width={100}
          height={200}
          className="rounded-full w-12 h-12 mt-4"
          onClick={() => {
            router.push('http://localhost:3008');
          }}
        />
        {menu && (
          <div className="bg-white rounded-xl w-[15vw] flex flex-col gap-2 justify-center  p-2 border border-gray-400 absolute bottom-12 left-24 z-[9999]">
            <Text style="slider-props" label="Download App" />
            <Text style="slider-props" label="About Myworld" />
            <Text style="slider-props" label="Manage Your Hub" />
            <Text style="slider-props" label="Send Feedback" />
            <Text style="slider-props" label="Settings" />
            <Text style="slider-props" label="Terms & Conditions" />
            <Text style="slider-props" label="Privacy & Policy" />
            <Text style="slider-props" label="Logout" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
