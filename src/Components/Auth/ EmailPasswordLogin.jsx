import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseAuth";
import useAuth from "./useAuth";
import { TextField, Button, Box } from "@mui/material";

const EmailPasswordLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      login({ email: user.email, provider: "email" });
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials");
    }
  };

  return (
    <Box className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4">
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          className="mb-2"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          className="mb-2"
        />
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <Button
          className="w-full !bg-blue-500 !text-white"
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};
export default EmailPasswordLogin;
