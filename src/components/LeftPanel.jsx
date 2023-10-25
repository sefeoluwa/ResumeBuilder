/* eslint-disable react/prop-types */
import { FaRegNewspaper } from 'react-icons/fa';
import { BsBorderStyle } from 'react-icons/bs';
import { useState } from 'react';

function LeftPanel({ onContentButtonClick, onCustomizeButtonClick }) {
  const [activeButton, setActiveButton] = useState('content');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'content') {
      onContentButtonClick();
    } else if (buttonName === 'customize') {
      onCustomizeButtonClick();
    }
  };


  return (
    <div className='flex flex-col justify-between h-[130px] p-3 ml-6  w-[170px] bg-secondary font-bold'>
      <button
        className={`flex flex-col items-center rounded-[10px] ${activeButton === 'content' ? 'bg-primary' : ''}`}
        onClick={() => handleButtonClick('content')}
      >
        <FaRegNewspaper style={{ marginTop: '4px' }} />
        <p className='ml-[5px] text-[18px]'>Content</p>
      </button>
      <button
        className={`flex flex-col items-center rounded-[10px] ${activeButton === 'customize' ? 'bg-primary' : ''}`}
        onClick={() => handleButtonClick('customize')}
      >
        <BsBorderStyle style={{ marginTop: '4px' }} />
        <p className='ml-[5px] text-[18px]'>Customize</p>
      </button>
    </div>
  );
}

export default LeftPanel;
