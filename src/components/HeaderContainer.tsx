import "./ExploreContainer.css";
import { IonChip, IonAvatar, IonLabel, IonBadge } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const HeaderContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className='container'>
      <IonChip>
        <IonAvatar>
          <img src='https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' />
        </IonAvatar>
        <IonLabel>{name}</IonLabel>
      </IonChip>
      <IonBadge style={{ position: "absolute" }}>35</IonBadge>
    </div>
  );
};

export default HeaderContainer;
