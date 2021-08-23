import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Chat.css";
import HeaderContainer from "../components/HeaderContainer";

const Chat: React.FC = () => {
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
            <IonTitle size='large'>Chat</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Chat with all your friends here - I will not code a new chat rather copy The Gem Chat sorce code' />
      </IonContent>
    </IonPage>
  );
};

export default Chat;
