import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  callOutline,
  chatboxEllipsesOutline,
  discOutline,
  peopleCircleOutline,
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Call from "../pages/Call";
import Chat from "../pages/Chat";
import Group from "../pages/Group";
import Moments from "../pages/Moments";
import Profile from "../pages/Profile";
import Status from "../pages/Status";
import AddEntryPage from "../pages/status/AddEntryPage";
import EntryPage from "../pages/status/EntryPage";
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
          <AddEntryPage />
        </Route>
        <Route exact path='/my/entries/view/:id'>
          <EntryPage />
        </Route>
        <Route exact path='/my/profile'>
          <Profile />
        </Route>
        <Route exact path='/my/group'>
          <Group />
        </Route>
        <Route exact path='/my/moments'>
          <Moments />
        </Route>
        <Route exact path='/my/status'>
          <Status />
        </Route>
        <Route exact path='/my/call'>
          <Call />
        </Route>
        <Route exact path='/my/entries/add'>
          <AddEntryPage />
        </Route>
        <Route exact path='/my/entries/view/:id'>
          <EntryPage />
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
        <IonTabButton tab='status' href='/my/moments'>
          <IonIcon icon={discOutline} />
          <IonLabel>Moments</IonLabel>
        </IonTabButton>
        <IonTabButton tab='call' href='/my/call'>
          <IonIcon icon={callOutline} />
          <IonLabel>Calls</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
