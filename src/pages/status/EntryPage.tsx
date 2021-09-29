import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { trash as trashIcon } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../../util/auth";
import { formatDate } from "../../util/date";
import { firestore } from "../../util/firebase";
import { Entry, toEntry } from "../../util/models";

interface RouteParams {
  id: string;
}

const EntryPage: React.FC = () => {
  const { userId } = useAuth();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [entry, setEntry] = useState<Entry>();
  useEffect(() => {
    const entryRef = firestore
      .collection("users")
      .doc("moments")
      .collection("entries")
      .doc(id);
    entryRef.get().then((doc) => setEntry(toEntry(doc)));
  }, [userId, id]);

  // const handleDelete = async () => {
  //   const entryRef = firestore
  //     .collection("users")
  //     .doc("moments")
  //     .collection("entries")
  //     .doc(id);
  //   await entryRef.delete();
  //   history.goBack();
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
          <IonTitle>{formatDate(entry?.date)}</IonTitle>
          {/* <IonButtons slot='end'>
            <IonButton onClick={handleDelete}>
              <IonIcon icon={trashIcon} slot='icon-only' />
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h2>{entry?.title}</h2>
        <img src={entry?.pictureUrl} alt={entry?.title} />
        <h2>{entry?.name}</h2>
        <p>{entry?.description}</p>
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
