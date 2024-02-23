import Button from 'shared/components/atoms/Button';
import Input from 'shared/components/atoms/Input';
import PopupCategory from 'shared/components/atoms/PopupCategory';
import ToggleButton from 'shared/components/atoms/ToggleButton';
import Tag from 'shared/components/atoms/Tag';
import Toast from 'shared/components/atoms/Toast';
import Text from 'shared/components/atoms/Text';
import ImageButton from 'shared/components/molecules/ImageButton';
import HubSuggestion from 'shared/components/molecules/HubSuggetion';
import Sectiontag from 'shared/components/molecules/Sectiontag';
import MyspaceCard from 'shared/components/molecules/MyspaceCard';
import RecommendedCard from 'shared/components/molecules/RecommendedCard';
import EnableDiscovery from 'shared/components/molecules/EnableDiscovery';
import { toast } from 'react-toastify';
import FollowSuggestion from 'shared/components/molecules/FollowSuggestion';
import StreamFollowCard from 'shared/components/molecules/StreamFollowCard';
import TopicContentCard from 'shared/components/molecules/TopicContentCard';
import ExpertCard from 'shared/components/molecules/ExpertCard';
import HubCard from 'shared/components/molecules/HubCard';
import ToggleCreateOption from 'shared/components/molecules/ToggleCreateOption';
import Caresoul from 'shared/components/Organism/Caresoul';
import Livestream from 'shared/components/Organism/Livestream';

import Sidebar from 'shared/components/Organism/Sidebar';
import Suggestion from 'shared/components/Organism/Suggestion';
import SignUp from 'shared/components/Organism/SignUp';
// import MainSlider from 'shared/components/Organism/MainSlider';
import DoubleCard from 'shared/components/molecules/DoubleCard';
import PopUp from 'shared/components/Organism/PopUp';
import LoginModal from 'shared/components/Organism/Login';
import EnterConversation from 'shared/components/molecules/EnterConversation';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <h1 className="text-3xl">This is Homepage</h1>
      <Button label="Follow" style={'primary'} />
      <Input hint="Enter you text" style={'default'} />
      <PopupCategory category="web development" />
      <ToggleButton />
      <Tag label="Follow" />
      {/* <Toast onClick={handleClick} label={'Howdy Modi'} /> */}
      <Text label={'Schedule Hub'} style={'create-text3'} />
      <ImageButton img={'/google.png'} style={'text-black'} />
      <HubSuggestion />
      <Sectiontag />
      <MyspaceCard img1={'/man.jpg'} img2={'/man.jpg'} img3={'/man.jpg'} />
      <RecommendedCard img={'/s1.avif'} img1={'/man.jpg'} />
      <EnableDiscovery />
      <FollowSuggestion
        label1={'User'}
        label2={'User Profession'}
        gap={'gap-5'}
      />
      <StreamFollowCard name={'Rajat Kumar'} />
      <TopicContentCard />
      <ExpertCard />
      <HubCard />
      <ToggleCreateOption
        optionTitle={'Everyone'}
        optionDesc={'Anyone can send you Hub join request'}
      />

      <Caresoul child={<TopicContentCard />} />
      <Livestream />
      <Sidebar
        img={'/logo.jpg'}
        img1={'/Homeactive.svg'}
        img1Alt={'/Homeinactive.svg'}
        img2={'/ic_create.svg'}
        img3={'/inactive_explore.svg'}
        img3Alt={'/ic_active_explore.svg'}
        img4={'/ic_inactivechat.svg'}
        img4Alt={'/ic_activechat.svg'}
        img5={'/ic_user_defolt_avator.svg'}
        img6={'/inactive_explore.svg'}
        img6Alt={'/ic_active_explore.svg'}
        img7={'/ic_more_option.svg'}
      />
      <Suggestion />
      <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
      {/* <MainSlider /> */}
      <DoubleCard img1={'/i1.jpg'} img2={'/i2.jpg'} />
      {/* popup */}
      <PopUp />
      <LoginModal
        img1={'/ic_cross_cancel_black.svg'}
        img2={'/logo.jpg'}
        img3={'/google.png'}
      />
      <EnterConversation />
    </div>
  );
}
