"use client";
import styles from "./login.module.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginGoogle() {
  const handleOnSuccess = (googleUser) => {
    console.log("Login success: currentUser:", googleUser.profileObj);
  };

  const handleError = (result) => {
    console.log("Login failed: result:", result);
  };
  return (
    <GoogleOAuthProvider clientId="579572444628-nak0v6sq3ocqmb4g6r2ff5r607mpc6qt.apps.googleusercontent.com">
      <main>
        <div className={styles.googleLogin}>
          <GoogleLogin onError={handleError} onSuccess={handleOnSuccess} />
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
