'use client';
import React from 'react';
import StreamFollowCard from '../molecules/StreamFollowCard';
import Tag from '../atoms/Tag';
import Text from '../atoms/Text';
import Image from 'next/image';
import Button from '../atoms/Button';
import VideoPlayer from './VideoPayer';

const Livestream = () => {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <StreamFollowCard name={'Rajat Kumar'} />
      <Text label="Room conversation title" style="create1 room" />
      <div className="flex gap-2">
        <Tag label="Follow" />
        <Tag label="Follow" />
      </div>
      <div className="relative flex justify-center px-5">
        {/* <Image
          src={''}
          width={600}
          height={350}
          alt="hub room"
          className="bg-rose-300 rounded-3xl w-[700px]"
        /> */}
        <VideoPlayer src="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8" />

        {/* <div className="absolute mt-11 bottom-3">
          <Button style={'primary'} label="Join MySpace" />
        </div> */}
      </div>
    </div>
  );
};

export default Livestream;
