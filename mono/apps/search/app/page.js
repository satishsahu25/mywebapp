import InputSearch from 'shared/components/molecules/InputSearch';
import SignUp from 'shared/components/Organism/SignUp';
import Tag from 'shared/components/atoms/Tag';
import Text from 'shared/components/atoms/Text';
import TabLayout from 'shared/components/Organism/TabLayout';
import Sidebar from 'shared/components/Organism/Sidebar';
import { searchTabContent, searchTabData } from 'shared/model/TabLayoutData';
export default async function Index() {
  return (
    <div className="relative">
      <div className=" fixed left-0 top-0 h-full ">
        <Sidebar />
      </div>
      <div className=" absolute left-[7vw] top-0 p-4">
        <InputSearch
          imgSrc={'/ic_searchactive.svg'}
          label={'Search room, experts'}
        />
        <TabLayout
          tabs={searchTabData}
          tabContent={searchTabContent}
          flexStyle={'flex-col'}
          flexStyle1={'flex-row'}
        />
      </div>
      <div className=" absolute right-0 top-3 w-[25vw] flex flex-wrap gap-6 border-l mr-3 pl-3 flex-col">
        <br />
        <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
        <Text label="Most searched topics" style="button-text" />
        <div className="flex flex-wrap gap-2 pb-20">
          <Tag label="Cloud Computing (AWS)" style={'create'} />
          <Tag label="Spinal Icare" style={'create'} />
          <Tag label="Web Development" style={'create'} />
          <Tag label="Face Pimple Care" style={'create'} />
          <Tag label="Fitness Care Food" style={'create'} />
        </div>

        {/* <Suggestion name={'Rajat Kumar'} imgSrc={'/i2.jpg'} /> */}
      </div>
    </div>
  );
}
