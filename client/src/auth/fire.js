import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD9f6wi9eC013UFcx9gFNKCbCfSMrm4Q7c",
  authDomain: "project-exam-softuni-react.firebaseapp.com",
  projectId: "project-exam-softuni-react",
  storageBucket: "project-exam-softuni-react.appspot.com",
  messagingSenderId: "1097949529541",
  appId: "1:1097949529541:web:3330b971e20fb8a28637ac",
  measurementId: "G-BV7DZTYC7F"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

export default fire;