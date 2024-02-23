
import TabLayout from 'shared/components/Organism/TabLayout';

import { profileTabsData, profileTabContent } from 'shared/model/TabLayoutData';
import ProfileHeader from './ProfileHeader';

export default async function Index() {
  return (
    <div className="w-[100%]">
      {/* <div className="flex gap-10 items-center fixed top-0 left-0 px-10 py-3 bg-white w-[100%]">
        <Image src={'/ic_back_arrow.svg'} alt="arrow" width={20} height={20} />
        <Text style="dropdown-text" label="Profile Managment" />
      </div> */}
      <ProfileHeader />
      <div className="w-[60%] py-10">
        <TabLayout
          tabs={profileTabsData}
          tabContent={profileTabContent}
          flexStyle={'flex-row gap-20 w-[100%] relative'}
          flexStyle1={'flex-col'}
          tabcontentStyle={'w-[60%] absolute right-0 top-20 -z-10'}
          tabStyle={'fixed left-0 top-20 w-[20%]'}
          tabBorderStyle={'border-b-2 border-black'}
        />
      </div>
    </div>
  );
}
