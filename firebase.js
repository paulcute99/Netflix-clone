// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaJmOV9SD3aDpzpJRRahbY0luLmigrzco",
  authDomain: "netflix-clone-a00df.firebaseapp.com",
  projectId: "netflix-clone-a00df",
  storageBucket: "netflix-clone-a00df.appspot.com",
  messagingSenderId: "494230856384",
  appId: "1:494230856384:web:a920d7541ef49c72550325"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }