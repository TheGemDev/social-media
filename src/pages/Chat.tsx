import {
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Chat.css";
import HeaderContainer from "../components/HeaderContainer";
import MessageInput from "./chat/MessageInput";
import ChatPage from "../components/ChatPage";

const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderContainer name='Gabriel Momoh' />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='David Oche'
            title='friend'
            subtitle='how are you'
            img='https://avatars.githubusercontent.com/u/6577830?v=4'
          />
          <ChatPage
            name='Samuel Daniel'
            title='geng!!'
            subtitle='re you going to school'
            img=''
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
