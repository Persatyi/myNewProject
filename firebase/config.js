import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArScDkLhRS8PZgxTfOU0pI4a-0J_4iSn0",
  authDomain: "rn-mobile-47acb.firebaseapp.com",
  projectId: "rn-mobile-47acb",
  storageBucket: "rn-mobile-47acb.appspot.com",
  messagingSenderId: "656735639459",
  appId: "1:656735639459:web:0d1667305b20fabf7cac16",
  measurementId: "G-WLPDR3311N",
};

export default firebase.initializeApp(firebaseConfig);
