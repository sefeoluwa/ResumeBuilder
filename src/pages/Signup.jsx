import {auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'


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
   <div className=" flex gap-5 flex-col items-center justify-center h-[40%] w-[40%]">
    <FcGoogle size='10em' />
   <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign Up with Google</button>
   </div>
  </div>
  )
}

export default Signup