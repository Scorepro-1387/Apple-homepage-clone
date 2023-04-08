import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkdnWAfKXKtcLsmzWcwgQ7HO4VAQJbdxM",
  authDomain: "apple-website-clone-69162.firebaseapp.com",
  projectId: "apple-website-clone-69162",
  storageBucket: "apple-website-clone-69162.appspot.com",
  messagingSenderId: "40840591728",
  appId: "1:40840591728:web:7d46990d463acc6568b7b5",
  measurementId: "G-Y6FN5HL8N8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
      })
      .catch((error) => {
        console.log(error);
      });
      
};