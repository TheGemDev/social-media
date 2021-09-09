import { Route, Redirect, Switch } from "react-router-dom";
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
  chatboxEllipses,
} from "ionicons/icons";

import Login from "./pages/auth/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

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
import Signup from "./pages/auth/Signup";
import { AuthContext, useAuthInit } from "./util/auth";
import AppTabs from "./components/AppTabs";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonLoading isOpen />;
  }
  console.log(`rendering App with auth:`, auth);
  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route path='/my'>
              <AppTabs />
            </Route>
            <Redirect exact path='/' to='/my/chat' />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
