import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg';

const ExpertCard = ({ data, expertName='Expert Name' }) => {
  return (
    <>
      {data?.slice(1, 16).map((expert) => {
        return (
          <div id={expert._id} className="w-[200px] h-fit py-5 flex flex-col items-center gap-3">
            <div>
              <Image
                src={expert.profile_picture?expert.profile_picture:ic_user_defolt_avator}
                width={150}
                height={150}
                alt="expert"
                className="rounded-full"
              />
            </div>
            <div>
              <Text label={expert.name?expert.name:expertName} style="slider-props" />
            </div>
            <Text label="@django @python" />
            <Button label="Follow" />
          </div>
        );
      })}
    </>
  );
};

export default ExpertCard;
