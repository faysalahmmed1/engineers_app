// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL6E7Yyft8I2VtepHCl3k7wGpC5H4b9Ak",
  authDomain: "genius-car-ser.firebaseapp.com",
  projectId: "genius-car-ser",
  storageBucket: "genius-car-ser.appspot.com",
  messagingSenderId: "966121163778",
  appId: "1:966121163778:web:3557b3fe9ad0197986eb1b",
  measurementId: "G-D70ZHN6Y31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;



/**
 1.  firebase init

 2.  {
  "hosting": {
    "site": "genius-car-ser-id",

    "public": "public",
    ...
  }
}
 

3. firebase deploy --only hosting:genius-car-ser-id
 */