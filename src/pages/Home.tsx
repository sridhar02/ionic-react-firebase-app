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
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle class="ion-padding">Ionic is interesting!!!!</IonTitle>
        <IonList>
          {arr.map((elem, i) => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img src={`//unsplash.it//${400 + i}`} alt="random logo" />
                </IonAvatar>

                <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.description}</h3>
                  <p>Some helper text!!!</p>
                </IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  onClick={() => alert("are you sure want to delete")}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
