import InApp from "./pages/InApp"
import Signup from "./pages/Signup"
import { auth } from './firebase-config'
import { useState } from "react"
import { signOut } from "firebase/auth"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { DataProvider } from './Context';
import { logoTransparent } from './assets'

const App = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));



  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
     window.location.pathname = '/signup'
    })
  }

  return (
    <Router>
            <nav className="nav flex justify-center"> 
         <div className="pt-4 flex justify-between w-[50%]">
         <Link to='/' className="pt-1">
          <img src={logoTransparent} alt="ProFolio logo" className="w-[100px]"/>
          </Link>
       {!isAuth ? ( 
        <Link to='/signup'>SignUp</Link> 
        ) : ( 
        <>
        <button onClick={signUserOut} className="signup-btn">Sign Out</button>
        </>
        )}
       </div>
      </nav>
      <DataProvider>
        <Routes>
          <Route path="/" element={<InApp isAuth={isAuth} />} />
          <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        </Routes>
        </DataProvider>
    </Router>
  )
}

export default App