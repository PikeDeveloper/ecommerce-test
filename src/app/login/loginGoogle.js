"use client";
import styles from "./login.module.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { idGoogleOAUth } from "../../utils/constants.js";
import { useProducts } from "../../context/ProductsContext.js";
import decodeJwt from "@/utils/decodeJwt";

export default function LoginGoogle() {
  const { setGlobalUser } = useProducts();

  const handleOnSuccess = (credentialREsponse) => {
    const { payload } = decodeJwt(credentialREsponse.credential);
    setGlobalUser({ name: payload.name });
   // window.location.href = "/login";
   
  };

  const handleError = (result) => {
    console.log("Login failed: result:", result);
  };
  return (
    <GoogleOAuthProvider clientId={idGoogleOAUth}>
      <main>
        <div className={styles.googleLogin}>
          <GoogleLogin onError={handleError} onSuccess={handleOnSuccess} />
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
