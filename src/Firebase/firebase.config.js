// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Xt2pduMX22Gwkm5lyZ1c1mCx_B0rA3o",
  authDomain: "oitech-ba098.firebaseapp.com",
  projectId: "oitech-ba098",
  storageBucket: "oitech-ba098.appspot.com",
  messagingSenderId: "167136673898",
  appId: "1:167136673898:web:01f1176adaa445f00c4a13",
  measurementId: "G-YS9TGVVCX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///const analytics = getAnalytics(app);

export default app;
