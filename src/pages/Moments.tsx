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
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Status.css";
import HeaderContainer from "../components/HeaderContainer";
import {
  add,
  aperture,
  apertureOutline,
  cameraOutline,
  document,
  documentAttach,
  logoVimeo,
  settings,
  text,
  videocam,
  walkOutline,
} from "ionicons/icons";

import { usePhotoGallery } from "../hooks/Camera";
import { useEffect, useState } from "react";
import { useAuth } from "../util/auth";
import { firestore } from "../util/firebase";
import { Entry, toEntry } from "../util/models";
import { formatDate } from "../util/date";

const Moments: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
    const { userId } = useAuth();
    const [entries, setEntries] = useState<Entry[]>([]);
    useEffect(() => {
      const entriesRef = firestore
        .collection("users")
        .doc("moments")
        .collection("entries");
      return entriesRef
        .orderBy("date", "desc")
        .limit(40)
        .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
    }, [userId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderContainer name='Gabriel Momoh' />
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          {entries.map((entry) => (
            <IonItem
              button
              key={entry.id}
              routerLink={`/my/entries/view/${entry.id}`}>
              <IonThumbnail slot='end'>
                <IonImg src={entry.pictureUrl} />
              </IonThumbnail>
              <IonLabel>
                <h2>{formatDate(entry.date)}</h2>
                <h3>{entry.title}</h3>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

      <section>
        <IonFab vertical='center' horizontal='end' edge slot='fixed'>
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side='bottom'>
            {/* <IonFabButton>
              <IonIcon icon={text} />
            </IonFabButton> */}
            <IonFabButton routerLink='/my/entries/add'>
              <IonIcon icon={cameraOutline} />
            </IonFabButton>
            {/* <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={aperture} />
            </IonFabButton> */}
            {/* <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={videocam} />
            </IonFabButton> */}
          </IonFabList>
        </IonFab>
      </section>
    </IonPage>
  );
};

export default Moments;
