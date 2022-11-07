// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpmml8-t8j98JoW4fSfxnQC3C9NdEta7A",
    authDomain: "altschool-exam-e0831.firebaseapp.com",
    projectId: "altschool-exam-e0831",
    storageBucket: "altschool-exam-e0831.appspot.com",
    messagingSenderId: "371223931360",
    appId: "1:371223931360:web:905d88e530f2fd978f6385",
    measurementId: "G-PB60G4BV3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;