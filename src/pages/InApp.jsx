/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { CenterTopBar, LeftPanel, Content, Customize, Resume } from '../components';
import { DataProvider } from '../Context';
import { useNavigate } from 'react-router-dom';

function InApp({ isAuth }) {


    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
          navigate('/signup')
        } else {
          navigate('/')
        }
      }, [isAuth, navigate]);


  const [activeSection, setActiveSection] = useState('content');
 

  const handleContentButtonClick = () => {
    setActiveSection('content');
  };

  const handleCustomizeButtonClick = () => {
    setActiveSection('customize');
  };


  return (
    <div className="flex justify-between flex-wrap">
     <DataProvider>
     <div className="flex flex-wrap gap-3 p-8 justify-between w-[40vw]">
        <LeftPanel
          onContentButtonClick={handleContentButtonClick}
          onCustomizeButtonClick={handleCustomizeButtonClick}
        />
        <div className="w-[400px] ml-5">
          <CenterTopBar />
          {activeSection === 'content' && <Content />}
          {activeSection === 'customize' && <Customize />}
        </div>
      </div>
      <Resume className='w-[45vw]'/>
     </DataProvider>
    </div>
  );
}

export default InApp;
