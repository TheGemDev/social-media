import {
  IonAvatar,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";

import { usePhotoGallery } from "../hooks/Camera";

import Man from "../res/profileMan.png";
import Woman from "../res/profileWoman.png";

interface constructorProps {
  img: string;
  name: string;
  title: string;
  subtitle: string;
}

const ChatPage: React.FC<constructorProps> = ({
  img,
  name,
  title,
  subtitle,
}) => {
      

  return (
    <IonItemSliding>
      <IonItem href='#'>
        <IonAvatar slot='start'>
          <img src={img || Man} />
        </IonAvatar>
        <IonLabel>
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </IonLabel>
      </IonItem>
      <IonItemOptions side='start'>
        <IonItemOption onClick={() => {}}>Sapa!</IonItemOption>
      </IonItemOptions>
      <IonItemOptions side='end'>
        <IonItemOption onClick={() => {}}>Get ara Here</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default ChatPage;
