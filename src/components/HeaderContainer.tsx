import "./ExploreContainer.css";
import {
  IonChip,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonRoute,
  IonRouterLink,
  IonBackButton
} from "@ionic/react";
import { auth } from "../util/firebase";
//import Profile from "./pages/Profile";

interface ContainerProps {
  name: string;
}

const HeaderContainer: React.FC<ContainerProps> = ({ name }) => {
  const user = auth.currentUser;
  return (
    <div className='container'>
      <IonRouterLink href="/profile">
        <IonChip>
          <IonAvatar>
            <img src='https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' />
          </IonAvatar>
          <IonLabel>{user}</IonLabel>
        </IonChip>
        <IonBadge style={{ position: "absolute" }}>35</IonBadge>
      </IonRouterLink>
    </div>
  );
};

export default HeaderContainer;
