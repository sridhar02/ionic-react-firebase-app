import firebase from "firebase/app";
import "firebase/auth";

import { toast } from "./components/toast";

const config = {
  apiKey: "AIzaSyDDlMSU0vjXrc34EiWjr_Qi4uM7aszVhXg",
  authDomain: "ionic-react-app-12b97.firebaseapp.com",
  databaseURL: "https://ionic-react-app-12b97.firebaseio.com",
  projectId: "ionic-react-app-12b97",
  storageBucket: "ionic-react-app-12b97.appspot.com",
  messagingSenderId: "454351497469",
  appId: "1:454351497469:web:45c6827028715134353694",
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
    toast(error.message,5000);
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
    toast(error.message,5000);
    return false;
  }
}
