// Import Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

import Config from "./config";

//create a config.tsx file in the same folder using this template

/*
const Config = {
  apiKey: "",
  authDomain: "",
  databaseURL:
    "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
}
export default Config;
*/

const firebaseConfig = {
  authDomain: Config.authDomain,
  apiKey: Config.apiKey,
  projectId: Config.projectId,
  databaseURL: Config.databaseURL,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
  measurementId: Config.measurementId,
};

// Configure Firebase
const app = firebase.initializeApp(firebaseConfig);

export const analytics = app.analytics();
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();
