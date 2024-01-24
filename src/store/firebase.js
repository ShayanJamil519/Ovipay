import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBE6WqICM_sSnP7H1PbhsRqju9fVu3aUbY",
  authDomain: "korean-project-c59d2.firebaseapp.com",
  projectId: "korean-project-c59d2",
  storageBucket: "korean-project-c59d2.appspot.com",
  messagingSenderId: "211291778019",
  appId: "1:211291778019:web:58af61b59dcad950128ed6",
  measurementId: "G-D2B3ZCRYJL"
};

firebase.initializeApp(firebaseConfig);

export default firebase;