import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9f6wi9eC013UFcx9gFNKCbCfSMrm4Q7c",
  authDomain: "project-exam-softuni-react.firebaseapp.com",
  projectId: "project-exam-softuni-react",
  storageBucket: "project-exam-softuni-react.appspot.com",
  messagingSenderId: "1097949529541",
  appId: "1:1097949529541:web:3330b971e20fb8a28637ac",
  measurementId: "G-BV7DZTYC7F",
};

const fire = initializeApp(firebaseConfig);
const storage = getStorage();
export const auth = getAuth(fire);

export async function upload(file, currentUser, updatedName) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL }, { displayName: updatedName })
    .then(() => {
      console.log("done");
    })
    .catch((err) => {
      console.log(err);
    });

  alert("Uploaded file!");
  window.location.reload();
}

export default fire;
