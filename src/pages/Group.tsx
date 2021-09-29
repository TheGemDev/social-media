import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Group.css";
import HeaderContainer from "../components/HeaderContainer";
import { CardExamples } from "../components/CardContainer";

const Group: React.FC = () => {
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
            <IonTitle size='large'>Group</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name='Yeah if you have frenz you should see them here' />
      </IonContent>
    </IonPage>
  );
};

export default Group;
