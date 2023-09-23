import { useState } from 'react';
import { CenterTopBar, LeftPanel, EditContent, CustomizeLook, Resume } from './components';

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
      <div className="flex flex-wrap gap-5 p-8 justify-between w-[50vw]">
        <LeftPanel
          onContentButtonClick={handleContentButtonClick}
          onCustomizeButtonClick={handleCustomizeButtonClick}
        />
        <div className="w-[400px] ml-5">
          <CenterTopBar />
          {activeSection === 'content' && <EditContent />}
          {activeSection === 'customize' && <CustomizeLook />}
        </div>
      </div>
      <Resume />
    </div>
  );
}

export default App;
