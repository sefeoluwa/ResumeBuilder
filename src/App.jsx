import { CenterTopBar,  LeftPanel, EditContent, CustomizeLook, Resume } from "./components"

function App() {
  return (
    <div className="flex p-10 justify-between">
    <LeftPanel />
    <div className="w-[30vw]">
    <CenterTopBar />
    <EditContent />
    <CustomizeLook />
    </div>
    <Resume />
    </div>
  )
}

export default App