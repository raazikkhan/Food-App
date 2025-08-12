import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import useAuth from "./useAuth";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Get user info
      const user = result.user;
      login({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        provider: "google",
      });
    } catch (error) {
      alert("Google login failed!");
      console.log("Google login error:", error);
    }
  };

  return (
    <Button
      startIcon={<FcGoogle />}
      className="w-full !bg-blue-600 !text-white mb-2"
      variant="contained"
      onClick={handleGoogleLogin}
    >
      Login with Google
    </Button>
  );
};
export default GoogleLoginButton;
