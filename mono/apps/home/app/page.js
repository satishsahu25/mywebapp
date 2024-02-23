'use client';
import Input from 'shared/components/atoms/Input';
import Livestream from 'shared/components/Organism/Livestream';
import Sidebar from 'shared/components/Organism/Sidebar';
import Suggestion from 'shared/components/Organism/Suggestion';
import SignUp from 'shared/components/Organism/SignUp';
import Header from 'shared/components/molecules/Header';
import PopUp from 'shared/components/Organism/PopUp';
import SplashScreen from 'shared/components/Organism/SplashScreen';
import SaveDeviceIdLocalstorage from 'shared/utils/SaveDeviceIdLocalstorage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopupData } from 'shared/Featured/slices/popUp.slice';

export default function Index() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'POP_UP_FETCH_REQUESTED' });
  }, [dispatch]);
  const popUpselector = useSelector(selectPopupData);
  useEffect(() => {
    if (popUpselector?.video?.message === 'Success') {
      setShow(true);
    }
  }, [popUpselector]);
  if (!show) {
    return <SplashScreen />;
  }
  return (
    <div className="relative w-[100%]">
      <SaveDeviceIdLocalstorage />
      <div className="z-[100] ">
        <PopUp />
      </div>
      <div className=" fixed left-0 top-0 h-full z-[-1]">
        <Sidebar />
      </div>
      <div className="fixed top-0 left-[7vw] p-4 z-0 bg-white w-[67%]">
        <Header headerName={'Home'} styleName={'signup heading'} />
      </div>
      <div className=" absolute left-[7vw] top-10 p-4  z-[-1]">
        <Livestream />
      </div>
      <div
        className=" absolute right-0 top-3 w-[25%] flex flex-col gap-6 border-l mr-3 pl-3  z-[-1]
    "
      >
        <div className="fixed top-0 right-0 mr-3 p-3 w-[25%] z-10 bg-white">
          <Input hint="Enter you text" style={'home'} />
        </div>
        <div className="absolute top-20 right-0 flex flex-col gap-6">
          <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
          <Suggestion name={'Rajat Kumar'} imgSrc={'/i2.jpg'} />
        </div>
      </div>
    </div>
  );
}
