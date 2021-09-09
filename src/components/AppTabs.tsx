import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  chatboxEllipsesOutline,
  discOutline,
  peopleCircleOutline,
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Chat from "../pages/Chat";
import Group from "../pages/Group";
import Profile from "../pages/Profile";
import Status from "../pages/Status";
import { useAuth } from "../util/auth";

const AppTabs: React.FC = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to='/login' />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/my/chat'>
          <Chat />
        </Route>
        <Route exact path='/my/entries/add'>
          <Status />
        </Route>
        <Route exact path='/my/entries/view/:id'>
          <Status />
        </Route>
        <Route exact path='/my/profile'>
          <Profile />
        </Route>
        <Route exact path='/my/group'>
          <Group />
        </Route>
        <Route exact path='/my/status'>
          <Status />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='chat' href='/my/chat'>
          <IonIcon icon={chatboxEllipsesOutline} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
        <IonTabButton tab='group' href='/my/group'>
          <IonIcon icon={peopleCircleOutline} />
          <IonLabel>Group</IonLabel>
        </IonTabButton>
        <IonTabButton tab='status' href='/my/status'>
          <IonIcon icon={discOutline} />
          <IonLabel>Status</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
