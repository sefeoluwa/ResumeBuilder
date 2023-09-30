import { useState } from 'react';
import { CenterTopBar, LeftPanel, Content, Customize, Resume } from './components';
import { DataProvider } from './Context';

function App() {
  const [activeSection, setActiveSection] = useState('content'); // Default to 'content'

  // Function to handle content button click
  const handleContentButtonClick = () => {
    setActiveSection('content');
  };

  // Function to handle customize button click
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

export default App;
