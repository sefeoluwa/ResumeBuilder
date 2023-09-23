import { CenterTopBar,  LeftPanel, EditContent, CustomizeLook, Resume } from "./components"

function App() {
  return (
    <div className="flex justify-between">
      <div className="flex p-8 justify-between w-[48vw]" >
        <LeftPanel />
        <div className="w-[30vw] ml-5">
          <CenterTopBar />
          <EditContent />
          <CustomizeLook />
        </div>
      </div>
      <Resume />
    </div>
  )
}

export default App