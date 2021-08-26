import { Route, Redirect } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonLoading,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  ellipse,
  square,
  chatboxEllipsesOutline,
  homeOutline,
  addCircleSharp,
  addCircleOutline,
  peopleCircleOutline,
  discOutline,
  chatboxEllipsesSharp,
} from "ionicons/icons";
import Group from "./pages/Group";
import Status from "./pages/Status";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./util/firebase";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import { observer, MobXProviderContext } from "mobx-react";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/DarkTheme.css";
import { Start } from "./pages/Start";
import React from "react";

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path='/group' component={Group} />

            <Route exact path='/status' component={Status} />

            <Route path='/chat' component={Login} />

            <Route path='/profile' component={Profile} />

            <Route path='/login' component={Login} />

            <Route exact path='/'>
              <Redirect to='/chat' />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot='bottom'>
            <IonTabButton tab='chat' href='/chat'>
              <IonIcon icon={chatboxEllipsesOutline} />
              <IonLabel>Chat</IonLabel>
            </IonTabButton>
            <IonTabButton tab='group' href='/group'>
              <IonIcon icon={peopleCircleOutline} />
              <IonLabel>Group</IonLabel>
            </IonTabButton>
            <IonTabButton tab='status' href='/status'>
              <IonIcon icon={discOutline} />
              <IonLabel>Status</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
