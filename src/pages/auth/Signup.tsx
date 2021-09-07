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
} from "@ionic/react";
import firebase from "firebase";
import { logoGoogle, personCircle } from "ionicons/icons";

import { Join, SignIn } from "../../components/authButton/authbutton";
import { auth } from "../../util/firebase";

const Signup: React.FC = () => {
  return (
    <>
      <Join />
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
                  onClick={() =>
                    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                  }>
                  <IonIcon slot='start' icon={logoGoogle} />
                  SIGNUP
                </IonButton>
                <p style={{ fontSize: "medium" }}>
                  Don't have an account? <a href='#'>SIGNUP</a>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
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
