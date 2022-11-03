import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnnxWZpJq76izmFGX8Qnx04NknrQJsUVU",
  authDomain: "crwn-db-5de56.firebaseapp.com",
  databaseURL:
    "https://crwn-db-5de56-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crwn-db-5de56",
  storageBucket: "crwn-db-5de56.appspot.com",
  messagingSenderId: "1008635375924",
  appId: "1:1008635375924:web:6a84ba70177e4f3bb63561",
  measurementId: "G-78TYE11DKL",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWirhGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};
