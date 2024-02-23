import Sidebar from 'shared/components/Organism/Sidebar';
import Header from 'shared/components/molecules/Header';
import Livestream from 'shared/components/Organism/Livestream';
import Image from 'next/image';
import backarrowright from 'shared/assets/backarrowright.svg';
import Input from 'shared/components/atoms/Input';
import Text from 'shared/components/atoms/Text';
import HubSuggetion from 'shared/components/molecules/HubSuggetion';
export default async function Index() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[7vw] flex w-[93vw]">
        <div className="flex flex-col w-[70%] h-screen">
          <div className="flex gap-3 px-5 py-3">
            <Image
              src={backarrowright}
              width={20}
              height={20}
              alt="go back"
              className="rotate-180"
            />
            <Header headerName={'Watch'} styleName={'room-text'} />
          </div>
          <div className="px-5 py-3">
            <Livestream />
          </div>
        </div>
        <div className="flex flex-col h-screen overflow-y-auto w-[30%]">
          <div className=' h-fit px-5 py-3'>
            <Input hint="Search Rooms, experts" />
            <Text label="Recommended room" style="heading" />
          </div>
          <div className="py-3 px-5">
            {[1, 1, 1, 1, 1].map((curElement) => {
              return <HubSuggetion />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
