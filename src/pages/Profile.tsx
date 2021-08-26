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
} from "@ionic/react";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='chat' />
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
    </IonPage>
  );
};

export default Profile;
