import { CenterTopBar,  LeftPanel, EditContent, CustomizeLook, Resume } from "./components"

function App() {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="flex flex-wrap gap-5 p-8 justify-between w-[48vw]" >
        <LeftPanel />
        <div className="w-[300px] ml-5">
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