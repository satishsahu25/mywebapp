import React from 'react';
import Text from 'shared/components/atoms/Text';
import Image from 'next/image';
import Button from 'shared/components/atoms/Button';
const MyspaceCard = ({ data, img1='', img2='', img3='' }) => {
  return (
    <>
      {data?.map((room) => {
        return (
          <div className=" flex flex-col gap-3 justify-center items-center border rounded-xl border-gray-300 py-2 px-4 w-[190px]">
            <div className="text-left flex flex-col gap-2">
              <Text
                style="slider-props"
                label="Digital Marketing for Beginners 2022"
              />
              <Text style="slider-props2" label="#Career #Courses #Salary" />
              <Text style="follow-text1" label="@Rockey Martin" />
              <Text style="myspace-time" label="May, 4:30pm" />
            </div>

            <div className="flex flex-row justify-center items-center mb-4">
              <Image
                src={img1}
                width={50}
                height={50}
                alt="img1"
                className=" rounded-full -mr-3"
              />
              <Image
                src={img2}
                width={60}
                height={60}
                alt="img2"
                className="outline border outline-offset-2 bg-white rounded-full z-10 p-1"
              />
              <Image
                src={img3}
                width={50}
                height={50}
                alt="img3"
                className=" rounded-full -ml-3"
              />
            </div>
            <Button style={'button'} label="Join" />
          </div>
        );
      })}
    </>
  );
};

export default MyspaceCard;
