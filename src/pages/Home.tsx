import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonText,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAvatar,
  IonLabel,
  IonButton,
  IonIcon,
  IonInput,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

import { star } from "ionicons/icons";

const arr = [
  { name: "sridhar", description: "Hello world!" },
  {
    name: "katta",
    description: "adasdasdad",
  },
  {
    name: "kta",
    description: "adasdasdad",
  },
  {
    name: "kata",
    description: "adasdasdad",
  },
];

const Home: React.FC = () => {
  const [state, setstate] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle class="ion-padding">Ionic is interesting!!!!</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Home;