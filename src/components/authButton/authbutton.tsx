import React from "react";

import { IonButton } from "@ionic/react";
import firebase, { auth } from "../../util/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./authbutton.css";

export const Join: React.FC = () => (
  <div className='container'>
    <IonButton
      draggable='true'
      size='default'
      expand='block'
      onClick={() =>
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      }>
      Join The House
    </IonButton>
  </div>
);

export const SignIn = () => (
  <IonButton
    size='default'
    onClick={() =>
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }>
    Sign In
  </IonButton>
);

export const SignOut = () => {
  const [user, loading] = useAuthState(auth);
  return (
    !loading &&
    user && (
      <IonButton size='default' onClick={() => auth.signOut()}>
        Sign Out
      </IonButton>
    )
  );
};
