"use cliente";

import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const handleOnSuccess = (googleUser) => {
    console.log("Login success: currentUser:", googleUser.profileObj);
  };

  const handleError = (result) => {
    console.log("Login failed: result:", result);
  };

  return <GoogleLogin onError={handleError} onSuccess={handleOnSuccess} />;
}
