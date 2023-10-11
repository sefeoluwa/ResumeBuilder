import {auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
function Signup({ setIsAuth }) {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true)
        navigate('/')
      })
    }

  return (
    <div className='signUpPage flex items-center justify-center h-[90vh]'>
   <div className=" flex items-center justify-center h-[40%] w-[40%]">
   <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign Up with Google</button>
   </div>
  </div>
  )
}

export default Signup