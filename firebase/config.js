// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJVrvIqwaO-04t4o4BKmOyyFqe1h6Px2M",
  authDomain: "it-magic-new.firebaseapp.com",
  projectId: "it-magic-new",
  storageBucket: "it-magic-new.appspot.com",
  messagingSenderId: "390544803349",
  appId: "1:390544803349:web:8b598631ab3c3bf613f01c",
  measurementId: "G-C79B09H027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
