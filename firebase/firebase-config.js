import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMMFTI5bcG3U-nzUu9LvxLY-kBhL7Yq5g",
  authDomain: "disspace-76973.firebaseapp.com",
  projectId: "disspace-76973",
  storageBucket: "disspace-76973.appspot.com",
  messagingSenderId: "156837203199",
  appId: "1:156837203199:web:b4579eb2f90bb8d21a50ca",
  measurementId: "G-46DN5PSJVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = getAuth(app);

export { storage, auth };
