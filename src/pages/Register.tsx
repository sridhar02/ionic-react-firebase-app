import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();

  function registerUser() {
    console.log(username, password);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="username"
          value={username}
          onIonChange={(e: any) => setUsername(e.target.value)}
        ></IonInput>
        <IonInput
          placeholder="Password"
          value={password}
          type="password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonInput
          placeholder="Confirm Password"
          value={confirmPassword}
          type="password"
          onIonChange={(e: any) => setConfirmPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={registerUser}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
}
