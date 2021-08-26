import React from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonApp,
  IonIcon,
  IonButton,
} from "@ionic/react";

import "./Start.css";

import { arrowForwardOutline } from "ionicons/icons";

import business from "../res/business.svg";
import learning from "../res/learning.svg";
import video from "../res/video-calling.svg";
import year from "../res/new-year.svg";
// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

export const Start: React.FC = () => (
  <IonApp>
    <IonContent fullscreen class='ion-padding' scroll-y='false'>
      <IonSlides>
        <IonSlide>
          <div className='slide'>
            <img src={business} />
            <h2>Welcome</h2>
            <p>
              The <b>Messenger</b> of the future
            </p>
          </div>
        </IonSlide>

        <IonSlide>
          <img src={learning} />
          <h2>Made By</h2>
          <p>
            <b>Gabriel Momoh</b> A passionate developer
          </p>
        </IonSlide>

        <IonSlide>
          <img src={year} />
          <h2>Ready to Join the House</h2>
          <p>
            <b>One Step</b> at a time
          </p>
          <IonButton fill='solid'>
            Join <IonIcon icon={arrowForwardOutline}></IonIcon>
          </IonButton>
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonApp>
);
