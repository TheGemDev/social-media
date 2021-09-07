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
import { personCircle } from "ionicons/icons";

import { Join, SignIn } from "../../components/authButton/authbutton";
const Login: React.FC = () => {
  return (
    <>
      <Join />
      <IonPage>
        <IonContent fullscreen className='ion-padding ion-text-center'>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonIcon
                  style={{ fontSize: "70px", color: "#0040ff" }}
                  icon={personCircle}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'> Email</IonLabel>
                  <IonInput
                    type='email'
                    /*
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}*/
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'> Password</IonLabel>
                  <IonInput
                    type='password'
                    /*value={password}
                    onIonChange={(e) =>
                      setPassword(e.detail.value!)
                    }*/
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p style={{ fontSize: "small" }}>
                  By clicking LOGIN you agree to our <a href='#'>Policy</a>
                </p>
                <IonButton
                  expand='block'
                  /*onClick={handleLogin}*/ href="/chat">
                  Login
                </IonButton>
                <p style={{ fontSize: "medium" }}>
                  Don't have an account? <a href='#'>Sign up!</a>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonRow>
          <IonCol>
            <IonFooter>
              <p style={{ fontSize: "medium" }}>Version 1.0.0</p>
            </IonFooter>
          </IonCol>
        </IonRow>
      </IonPage>
    </>
  );
};

export default Login;
