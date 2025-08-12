// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOSoqjmNiaboCd0Rnrj0Zt-JhpEO1KF_k",
  authDomain: "food-app-a2b60.firebaseapp.com",
  projectId: "food-app-a2b60",
  storageBucket: "food-app-a2b60.firebasestorage.app",
  messagingSenderId: "16112135037",
  appId: "1:16112135037:web:0068ba048e33e57718fa14",
  measurementId: "G-VB513N8FEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Export the auth and provider to use in other parts of the application
export { auth, provider };
