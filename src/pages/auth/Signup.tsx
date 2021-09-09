import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonIcon,
  IonLabel,
  IonInput,
  IonFooter,
  IonText,
  IonLoading,
} from "@ionic/react";
import firebase from "firebase";
//import firebase from "firebase";
import { logoGoogle, personCircle } from "ionicons/icons";

import { auth } from "../../util/firebase";

import React, { useState } from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../util/auth";

//import { auth } from "../../util/firebase";
import Login from "./Signup";

const Signup: React.FC = () => {
  const { loggedIn } = useAuth();
  const [status, setStatus] = useState({ loading: false, error: false });

  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      console.log("credential:", credential);
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log("error:", error);
    }
  };

  if (loggedIn) {
    return <Redirect to='/chat' />;
  }
  return (
    <>
      <IonPage>
        <IonContent fullscreen className='ion-padding ion-text-center'>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonIcon
                  style={{ fontSize: "200px", color: "#0040ff" }}
                  icon={personCircle}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem></IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p style={{ fontSize: "small" }}>
                  By clicking SIGNUP you agree to our <a href='#'>Policy</a>
                </p>

                <IonButton
                  expand='block'
                  draggable='true'
                  size='default'
                  fill='outline'
                  onClick={handleLogin}>
                  <IonIcon slot='start' icon={logoGoogle} />
                  Signup
                </IonButton>
                <IonButton expand='block' fill='clear' routerLink='/signup'>
                  Don't have an account?
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonLoading isOpen={status.loading} />
        </IonContent>
        <IonRow>
          <IonCol className='ion-text-center'>
            <IonFooter>
              <p style={{ fontSize: "medium" }}>Version 1.0.0</p>
            </IonFooter>
          </IonCol>
        </IonRow>
      </IonPage>
    </>
  );
};

export default Signup;
