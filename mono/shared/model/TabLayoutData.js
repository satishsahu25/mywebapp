import AccountSettings from 'shared/components/molecules/AccountSettings';
import ManageProfile from 'shared/components/molecules/ManageProfile';
import Notification from '../components/molecules/Notification';
import Security from '../components/molecules/Security';
import UserProfile from 'shared/components/molecules/UserProfile';
import HubCard from 'shared/components/molecules/HubCard';
import HubSuggetion from '../components/molecules/HubSuggetion';
export const tabsData = [
  {
    id: 1,
    data: 'tab1',
  },
  {
    id: 2,
    data: 'tab2',
  },
  {
    id: 3,
    data: 'tab3',
  },
];

export const tabsContent = [
  {
    id: 1,
    content: [<HubCard thumbnail={'/man.jpg'} />],
  },
  {
    id: 2,
    content: [<HubCard thumbnail={'/woman.jpg'} />],
  },
  {
    id: 3,
    content: [<HubCard thumbnail={'/logo.jpg'} />],
  },
];

export const profileTabsData = [
  {
    id: 1,
    data: 'Edit profile',
  },
  {
    id: 2,
    data: 'Account Settings',
  },
  {
    id: 3,
    data: 'Notification',
  },
  {
    id: 4,
    data: 'Security and Logins',
  },
];
export const profileTabContent = [
  {
    id: 1,
    content: [<ManageProfile />],
  },
  {
    id: 2,
    content: [<AccountSettings />],
  },
  {
    id: 3,
    content: [<Notification/>],
  },
  {
    id: 4,
    content: [<Security/>],
  },
];

export const searchTabData = [
  {
    id: 1,
    data: 'Room',
  },
  {
    id: 2,
    data: 'Video',
  },
  {
    id: 3,
    data: 'Creator',
  },
];
export const searchTabContent = [
  {
    id: 1,
    content: [
      <HubSuggetion key={1} isLive={true}/>,
      <HubSuggetion key={2} isLive={true}/>,
      <HubSuggetion key={3} isLive={true}/>,      
    ],
  },
  {
    id: 2,
    content: [
      <UserProfile key={1} label1={'user1'} label2={'User 1'} />,
      <UserProfile key={2} label1={'user2'} label2={'User 2'} />,
      <UserProfile key={3} label1={'user3'} label2={'User 3'} />,
    ],
  },
  {
    id: 3,
    content: [
      <UserProfile key={1} label1={'profile1'} label2={'Profile 1'} />,
      <UserProfile key={2} label1={'profile2'} label2={'Profile 2'} />,
      <UserProfile key={3} label1={'profile3'} label2={'Profile 3'} />,
    ],
  },
];
