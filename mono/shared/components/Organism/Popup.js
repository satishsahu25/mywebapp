'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Text from 'shared/components/atoms/Text';
import Button from 'shared/components/atoms/Button';
import PopupCategory from 'shared/components/atoms/PopupCategory';
import FollowSuggestion from '../molecules/FollowSuggestion';
import Chiplanguage from 'shared/components/atoms/chiplanguage';
import { selectPopupData } from 'shared/Featured/slices/popUp.slice';
import axios from 'axios';
const Popup = () => {
  const popUpSelect = useSelector(selectPopupData);
  const [matchedPairs, setMatchedPairs] = useState([]);
  useEffect(() => {
    if (popUpSelect) {
      const subData = popUpSelect && popUpSelect.sub && popUpSelect.sub.data;

      const videoData =
        popUpSelect && popUpSelect.video && popUpSelect.video.data;

      const matchedPairs = findMatchedPairs(subData, videoData);
      setMatchedPairs(matchedPairs);
    }
  }, [popUpSelect]);

  function findMatchedPairs(subData, arr2) {
    const matchedPairs = [];

    // Iterate over properties of subData
    for (const key in subData) {
      const arr1 = subData[key]; // Get the array for the current property

      // Iterate over arr1
      for (let i = 0; i < arr1.length; i++) {
        const category_id = arr1[i].category_id;

        // Iterate over arr2
        for (let j = 0; j < arr2.length; j++) {
          const _id = arr2[j]._id;

          // If category_id from arr1 matches _id from arr2, add both items to matchedPairs
          if (category_id === _id) {
            // If _id is not already a property of matchedPairs, add it with an empty array as its value
            if (!matchedPairs[_id]) {
              matchedPairs[_id] = [];
            }

            matchedPairs[_id].push({ item1: arr1[i], item2: arr2[j] });
          }
        }
      }
    }

    return matchedPairs;
  }

  const [popup1, setPopup1] = useState(true);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);
  const [currentPopup, setCurrentPopup] = useState('popup1');
  const [Modal, setModal] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const Languages = ['Hindi', 'English', 'Bengali'];

  const handleClick = () => {
    if (popup1) {
      setPopup1(false);
      setPopup2(true);
      setCurrentPopup('popup2');
    } else if (popup2) {
      setPopup2(false);
      setPopup3(true);
      setCurrentPopup('popup3');
    } else if (popup3) {
      setPopup1(false);
      setPopup2(false);
      setPopup3(false);
      setModal(false);
    }
  };

  const [selectedItemsCount, setSelectedItemsCount] = useState(0);
  const [preferenceCategory, setPreferenceCategory] = useState([]);
  const [preferenceSubCategory, setPreferenceSubCategory] = useState([]);

  // Add this function
  const handleSelectItem = (isChecked, category, subCategory) => {
    if (isChecked) {
      setSelectedItemsCount((prevCount) => prevCount + 1);
      setPreferenceCategory((prevCategories) => [...prevCategories, category]);
      setPreferenceSubCategory((prevsubcatagories) => [
        ...prevsubcatagories,
        subCategory,
      ]);
    } else {
      setSelectedItemsCount((prevCount) => prevCount - 1);
      setPreferenceCategory((prevCategories) =>
        prevCategories.filter((cat) => cat !== category)
      );
      setPreferenceSubCategory((prevsubcatagories) =>
        prevsubcatagories.filter((subcat) => subcat !== subCategory)
      );
    }
  };

  // useEffect(() => {
  //   console.log('preferenceCategory', preferenceCategory);
  //   console.log('preferenceSubCategory', preferenceSubCategory);
  // }, [preferenceCategory, preferenceSubCategory]);
  const url = 'https://others.joinmyworld.live/cat/user';
  let id;
  if (typeof window !== 'undefined') {
    id = localStorage.getItem('deviceId');
  }

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(url, {
          body: {
            device_id: id,
            categories: preferenceCategory,
            sub_categories: preferenceSubCategory,
          },
        });
        const data = await response.data;
        console.log(data);
      } catch (error) {
        console.log('Error ocurred here', error);
      }
    };
    postData();
  }, [preferenceCategory, preferenceSubCategory]);

  return (
    <>
      {Modal && (
        <div className=" overflow-hidden bg-gray-900 bg-opacity-30  fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="w-1/2 h-5/6 overflow-hidden   flex flex-col justify-between  gap-4 bg-white rounded-3xl p-7 z-50">
            {popup1 && (
              <div className=" h-[100%] flex  flex-col gap-2">
                <div className=" h-[20%] flex  flex-col gap-2">
                  <Text
                    style="room-text"
                    label="What are you into these day's"
                  />

                  <div>
                    <Text
                      style="follow-text2"
                      label="Get your personalized liveroom conversation with best experts,playlist,"
                    />
                    <Text
                      style="follow-text2"
                      label="Please select at least five category"
                    />
                  </div>
                </div>

                <div
                  className=" h-[70%] overflow-y-auto "
                  style={{ scrollbarWidth: 'none' }}
                >
                  {Object.keys(matchedPairs).map((_id) => {
                    const pairs = matchedPairs[_id];
                    return (
                      <div key={_id}>
                        <h3 className="mt-5 text-xl font-bold">
                          {pairs[0].item2.category}
                        </h3>
                        <div className=" flex  items-start justify-start gap-5 pb-2 mt-3 scroll-x">
                          {pairs.slice(0, 10).map((pair, index) => (
                            <PopupCategory
                              category={pair.item1.sub_category}
                              key={index}
                              className={'whitespace-nowrap'}
                              onClick={(isChecked) =>
                                handleSelectItem(
                                  isChecked,
                                  pairs[0].item2.category,
                                  pair.item1.sub_category
                                )
                              }
                            />
                          ))}
                        </div>
                        <div className=" flex  items-start justify-start gap-5 pb-2 mt-3 scroll-x">
                          {pairs.slice(10).map((pair, index) => (
                            <PopupCategory
                              category={pair.item1.sub_category}
                              key={index}
                              className={'whitespace-nowrap'}
                              onClick={(isChecked) =>
                                handleSelectItem(
                                  isChecked,
                                  pairs[0].item2.category,
                                  pair.item1.sub_category
                                )
                              }
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button
                  label="Next"
                  className="w-full h-[10%]"
                  onClick={handleClick}
                  disabled={currentPopup === 'popup1' && selectedItemsCount < 5}
                  style={
                    currentPopup === 'popup1' && selectedItemsCount < 5
                      ? 'btnInactive'
                      : 'btnActive'
                  }
                />
              </div>
            )}
            {popup2 && (
              <div className=" h-[100%] flex flex-col gap-2">
                <div className=" h-[20%] flex flex-col gap-2">
                  <Text style="room-text" label="Choose languages ?" />
                  <div>
                    <Text
                      style="follow-text2"
                      label="You will be able to see Room conference call ,People, and trends "
                    />
                    <Text
                      style="follow-text2"
                      label="in any language you choose"
                    />
                  </div>
                </div>
                <div className=" h-[70%]">
                  {' '}
                  <Text style="slider-props" label="Technology" />
                  <div className="flex gap-4 mt-3">
                    {Languages.map((category, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectCategory(category)}
                      >
                        <Chiplanguage
                          category={category}
                          isselected={category === selectedCategory}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  label="Next"
                  className="w-full h-[10%]"
                  onClick={handleClick}
                  disabled={
                    currentPopup === 'popup2' && selectedCategory === null
                  }
                  style={
                    currentPopup === 'popup2' && selectedCategory === null
                      ? 'btnInactive'
                      : 'btnActive'
                  }
                />
              </div>
            )}
            {popup3 && (
              <div className=" h-[100%] flex flex-col gap-2">
                <div className=" flex flex-col gap-2 h-[20%]">
                  <Text
                    style="room-text"
                    label="Chose your expertise love to talk?"
                  />
                  <div>
                    <Text
                      style="follow-text2"
                      label="You\'ll be able to see Room conference call, people, and trends"
                    />
                    <Text
                      style="follow-text2"
                      label="in any language you choose"
                    />
                  </div>
                </div>

                <div
                  className="overflow-y-auto h-[70%] flex flex-col gap-2"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                  <FollowSuggestion
                    label1={'User'}
                    label2={'User Profession'}
                    style={'follow'}
                  />
                </div>
                <Button
                  label="Next"
                  className="w-full h-[10%]"
                  onClick={handleClick}
                  disabled={
                    currentPopup === 'popup2' && selectedCategory === null
                  }
                  style={
                    currentPopup === 'popup2' && selectedCategory === null
                      ? 'btnInactive'
                      : 'btnActive'
                  }
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
