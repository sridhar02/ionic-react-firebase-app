import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { registerUser } from "../firebaseConfig";
import { toast } from "../components/toast";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function register() {
    //validations
    setLoading(true);
    if (password !== confirmPassword) {
      return toast("Password do not match");
    }

    if (username.trim() === "" || password.trim() === "") {
      return toast("username and password are required and can not be empty");
    }

    const res = await registerUser(username, password);
    if (res) {
      toast("You have sucessfully registered");
    }
    setLoading(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="please await.." duration={0} isOpen={loading} />
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
        <IonButton onClick={register}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
}
