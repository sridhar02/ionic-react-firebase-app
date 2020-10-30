import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonLoading
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../firebaseConfig";
import { toast } from "../components/toast";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    setLoading(true);
    const res = await loginUser(username, password);
    console.log(username, password);
    if (res) {
      toast("logged in ");
    }
    setLoading(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="please await.." duration={0} isOpen={loading} />
      <IonContent className="ion-padding">
        <IonInput
          type="text"
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
        <IonButton onClick={login}>Login</IonButton>
        <p>
          New here? Create an account<Link to="/register"> register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
}
