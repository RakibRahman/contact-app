import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyAaZcC5Nz41mOZityOrVN3DResoA5SzAN8",

  authDomain: "contact-app-77047.firebaseapp.com",

  projectId: "contact-app-77047",

  storageBucket: "contact-app-77047.appspot.com",

  messagingSenderId: "1047506303843",

  appId: "1:1047506303843:web:1435f3d0872b9aa2f7b156",
};
const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB;
