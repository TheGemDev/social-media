import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonItem,
  IonLabel,
  IonToggle,
  IonBadge,
  IonBackButton,
  IonButtons,
  IonButton,
} from "@ionic/react";
import { auth } from "../util/firebase";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/my/chat' />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>Noifications</IonLabel>
          <IonBadge slot='end'>22</IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>Theme</IonLabel>
          <IonToggle slot='end' name='theme' color='dark'></IonToggle>
        </IonItem>
      </IonContent>
      <IonContent className='ion-padding'>
        <IonButton color='medium' expand='block' onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
