import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Post.css";
import HeaderContainer from "../components/HeaderContainer";

const Post: React.FC = () => {
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
            <IonTitle size='large'>Post</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name='Make a Post' />
      </IonContent>
      <section>
        <IonButton expand='block' fill='outline'>
          Add a Photo
        </IonButton>
        <IonButton expand='block' fill='outline'>
          Take a Video
        </IonButton>
        <IonButton expand='block' fill='outline'>
          Create A Post
        </IonButton>
        <IonButton expand='block' disabled={true}>
          Add a Poll
        </IonButton>
      </section>
    </IonPage>
  );
};

export default Post;
