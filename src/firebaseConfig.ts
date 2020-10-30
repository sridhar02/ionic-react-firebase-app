import firebase from "firebase/app";
import "firebase/auth";

import { toast } from "./components/toast";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (res) {
      return true;
    }
  } catch (error) {
    toast(error.message, 5000);
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (res) {
      return true;
    }
  } catch (error) {
    toast(error.message, 5000);
    return false;
  }
}
