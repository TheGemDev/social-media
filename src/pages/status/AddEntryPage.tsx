import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../util/auth";
import { auth, firestore, storage } from "../../util/firebase";

async function savePicture(blobUrl, userId) {
  const pictureRef = storage.ref(`/users/moments/pictures/${Date.now()}`);
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const snapshot = await pictureRef.put(blob);
  const url = await snapshot.ref.getDownloadURL();
  console.log("saved picture:", url);
  return url;
}

const AddEntryPage: React.FC = () => {
  const { userId } = useAuth();
  const history = useHistory();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [pictureUrl, setPictureUrl] = useState("button");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>();
  useEffect(
    () => () => {
      if (pictureUrl.startsWith("blob:")) {
        URL.revokeObjectURL(pictureUrl);
      }
    },
    [pictureUrl]
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length > 0) {
      const file = event.target.files.item(0);
      const pictureUrl = URL.createObjectURL(file);
      setPictureUrl(pictureUrl);
    }
  };

  const handlePictureClick = async () => {
    if (isPlatform("capacitor")) {
      try {
        const photo = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt,
          width: 600,
        });
        setPictureUrl(photo.webPath);
      } catch (error) {
        console.log("Camera error:", error);
      }
    } else {
      fileInputRef.current.click();
    }
  };

  const handleSave = async () => {
    history.goBack();
    const entriesRef = firestore
      .collection("users")
      .doc("moments")
      .collection("entries");
    
      
    const entryData = { date, title, pictureUrl, description, name };
    if (!pictureUrl.startsWith("/assets")) {
      entryData.pictureUrl = await savePicture(pictureUrl, userId);
    }
    const entryRef = await entriesRef.add(entryData);
    console.log("saved:", entryRef.id);
    history.goBack();
  };

  const user = auth.currentUser;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Share a moment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonLabel position='floating'>Your Name?</IonLabel>
            <IonInput
              value={user?.displayName}
              onIonChange={(event) => setName(event.detail.value)}
            />
          </IonItem>

          <IonItemDivider></IonItemDivider>

          <IonItem>
            <IonLabel position='floating'>What's Going On?</IonLabel>
            <IonInput
              value={title}
              onIonChange={(event) => setTitle(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>An Image would be great</IonLabel>
            <br />
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <img
              src={pictureUrl}
              alt=''
              style={{ cursor: "pointer" }}
              onClick={handlePictureClick}
            />
          </IonItem>

          <IonItem>
            <IonLabel position='floating'>More to say?</IonLabel>
            <IonTextarea
              value={description}
              onIonChange={(event) => setDescription(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>When did it happen?</IonLabel>
            <IonDatetime
              value={date}
              onIonChange={(event) => setDate(event.detail.value)}
            />
          </IonItem>
        </IonList>
        <IonButton expand='block' onClick={handleSave} disabled={false} >
          Share
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddEntryPage;
