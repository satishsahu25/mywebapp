import Button from '../../../shared/components/atoms/Button'
import Text from '../../../shared/components/atoms/Text'
import ImageButton from '../../../shared/components/molecules/ImageButton'
import ToggleCreateOption from '../../../shared/components/molecules/ToggleCreateOption'
import Image from 'next/image';
export default async function Index() {

  return (
    <>
    <div className='flex flex-row justify-between py-4 px-10'>
    <Text label='Create'/>
    <Button label='Create Hub' style={'primary'}/>
    </div>
    <div className='flex items-center justify-center flex-row pb-10 pr-12'>
      <Image src='/ic_user_defolt_avator.svg' width={50} height={50} alt='Default user'/>
      <div className='flex flex-col pt-4 pl-4'>
      <Text label='Add a title of the Hub' style='create1 room'/>
      <Text label='Your first 40 characters are first shown in the feeds.' style='create2-text'/>
      </div>
    </div>
     <div className='flex justify-center items-center flex-row pb-8'>
       <div className='flex flex-col'>
        <Button label='Go live'/>
        <Text label='Start an instant Hub' style='create2-text'/>
       </div>
       <div className='flex flex-col pl-20'>
       <ImageButton text={'Schedule Hub'} img={'/ic_user_defolt_avator.svg'} />
        <Text label='Schedule your Hub whenever you want' style='create2-text'/>
       </div>
     </div>
     <div className='flex flex-col ml-[25rem] gap-4'>
      <Text label='+Topic of hub' style='create-hub'/>
      <ToggleCreateOption
        optionTitle={'Everyone'}
        optionDesc={'Anyone can send you HUB join request'}
      />
      <ToggleCreateOption
        optionTitle={'Look your HUB'}
        optionDesc={'Only people you want'}
      />
     </div>
    </>
  );
}
