"use client";
import styles from "./login.module.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./login";

export default function AboutPage() {
  return (
    <GoogleOAuthProvider clientId="579572444628-nak0v6sq3ocqmb4g6r2ff5r607mpc6qt.apps.googleusercontent.com">
      <main>
        <div className={styles.googleLogin} >
          <Login />
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
