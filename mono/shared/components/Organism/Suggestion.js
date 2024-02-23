import React from 'react';
import Text from 'shared/components/atoms/Text';
import FollowSuggestion from 'shared/components/molecules/FollowSuggestion';
import HubSuggetion from 'shared/components/molecules/HubSuggetion';
const Suggestion = () => {
  return (
    <div className=" border w-[100%] p-2 rounded-xl">
      <Text label="Voice You may follow" style="signup heading" />
      <FollowSuggestion label1={'User'} label2={'User Profession'} />
      <FollowSuggestion label1={'User'} label2={'User Profession'} />
      <FollowSuggestion label1={'User'} label2={'User Profession'} />
      <Text label={'Hub you may like'} style={'signup heading'} />
      <HubSuggetion />
    </div>
  );
};

export default Suggestion;
