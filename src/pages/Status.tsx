import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Status.css";
import HeaderContainer from "../components/HeaderContainer";
import {
  add,
  aperture,
  apertureOutline,
  document,
  documentAttach,
  logoVimeo,
  settings,
  text,
  videocam,
} from "ionicons/icons";

import { usePhotoGallery } from "../hooks/Camera";
import { useState } from "react";

const Status: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderContainer name='Gabriel Momoh' />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Status</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size='6' key={index}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
      <section>
        <IonFab vertical='center' horizontal='end' edge slot='fixed'>
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side='bottom'>
            <IonFabButton>
              <IonIcon icon={text} />
            </IonFabButton>

            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={aperture} />
            </IonFabButton>
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={videocam} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={documentAttach} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </section>
    </IonPage>
  );
};

export default Status;
