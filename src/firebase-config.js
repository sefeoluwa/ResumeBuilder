import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBm81IOWSpU7Oxf6P4imGuDY0KPhxFER0s",
  authDomain: "resume-builder-fa818.firebaseapp.com",
  projectId: "resume-builder-fa818",
  storageBucket: "resume-builder-fa818.appspot.com",
  messagingSenderId: "596392639646",
  appId: "1:596392639646:web:cb70d30b556ff6320a8f8f",
  measurementId: "G-HR3DVBTFS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();