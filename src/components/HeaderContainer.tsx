import "./ExploreContainer.css";
import {
  IonChip,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonRoute,
  IonRouterLink,
  IonBackButton,
  IonButton,
  IonContent,
} from "@ionic/react";
import { auth } from "../util/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//import Profile from "./pages/Profile";

interface ContainerProps {
  name: string;
}

const HeaderContainer: React.FC<ContainerProps> = ({ name }) => {
  const user = auth.currentUser;
  return (
    <div className='container'>
      <IonRouterLink href='/my/profile'>
        <IonChip>
          <IonAvatar>
            <img
              src={
                user?.photoURL ||
                "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              }
            />
          </IonAvatar>

          <IonLabel className='ion-text-wrap'>{user?.displayName}</IonLabel>
        </IonChip>
        <IonBadge style={{ position: "absolute" }}>35</IonBadge>
      </IonRouterLink>
    </div>
  );
};

export default HeaderContainer;
