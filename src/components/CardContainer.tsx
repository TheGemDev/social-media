import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

export const CardExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>You In france</IonCardSubtitle>
            <IonCardTitle>Hanging out with my bois</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            This is my demo post and i am just posting this here.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot='start' />
            <IonLabel>I bought a House</IonLabel>
            <IonButton fill='outline' slot='end'>
              Pay me Now!!!!!
            </IonButton>
          </IonItem>

          <IonCardContent>
            hello hello hello hello hello hello hello hello hello
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot='start' />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill='outline' slot='end'>
              Read More
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, hello hello hello hello hello hello hello hello
            hello
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href='#' className='ion-activated'>
            <IonIcon icon={wifi} slot='start' />
            <IonLabel>Free Wifi near me don't use</IonLabel>
          </IonItem>

          <IonItem href='#'>
            <IonIcon icon={wine} slot='start' />
            <IonLabel>Take this wine all of you</IonLabel>
          </IonItem>

          <IonItem className='ion-activated' href='#'>
            <IonIcon icon={warning} slot='start' />
            <IonLabel>Danger, Don't Click on this</IonLabel>
          </IonItem>

          <IonItem href='#'>
            <IonIcon icon={walk} slot='start' />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
