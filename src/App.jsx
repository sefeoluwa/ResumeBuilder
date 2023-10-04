import InApp from "./pages/InApp"
import Signup from "./pages/Signup"
import { auth } from './firebase-config'
import { useState } from "react"
import { signOut } from "firebase/auth"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

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
            <nav className="nav">
        <Link to='/'>Home</Link>
       {!isAuth ? ( 
        <Link to='/signup'>SignUp</Link> 
        ) : ( 
        <>
          <Link to='/createpost'>Create Post</ Link>
        <button onClick={signUserOut} className="login-btn">Sign Out</button>
        </>
        )}
      </nav>
        <Routes>
        <Route path="/" element={<InApp isAuth={isAuth} />} />
          <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        </Routes>
    </Router>
  )
}

export default App