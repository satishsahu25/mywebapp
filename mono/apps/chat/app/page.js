import Sidebar from 'shared/components/Organism/Sidebar';
import Input from 'shared/components/atoms/Input';
import Header from 'shared/components/molecules/Header';
import threedots from 'shared/assets/three-dots.svg';
import Image from 'next/image';
import Message from 'shared/components/atoms/Message';
export default async function Index() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="ml-[7vw] flex w-[93vw]">
        <div className=" w-[35%] border-r h-screen flex flex-col">
          <div className="flex justify-between px-5 py-3">
            <Header headerName={'Messages'} styleName={'room-text'} />
            <div>
              <Image
                src={threedots}
                width={20}
                height={20}
                alt="more"
                className="rotate-90"
              />
            </div>
          </div>
          <div className="px-5 py-3 border-b">
            <Input hint="Search mentor" />
          </div>
          <div className=" h-screen">Chat List area</div>
        </div>
        <div className=" w-[65%] h-screen">
          <div className="h-[10%] border-b flex justify-between px-5 py-3">
            <div>image and username</div>
            <div>info icon</div>
          </div>
          <div className="h-[80%] ">
            <Message text={'hello, how are you?'} isSent />
          </div>
          <div className="h-[10%] border-t flex px-5 py-3">
            <div>record icon</div>
            <div>video icon</div>
            <Input hint="Say hello..." style={'message'} />
            <div>Like icon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
