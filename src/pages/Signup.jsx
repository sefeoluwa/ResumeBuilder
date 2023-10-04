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
    <div className='signUpPage'>
    <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign Up with Google</button>
  </div>
  )
}

export default Signup