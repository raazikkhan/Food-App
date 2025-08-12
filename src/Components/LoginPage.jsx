import React from "react";
import GoogleLoginButton from "./Auth/GoogleLoginButton.jsx";
import EmailPasswordLogin from "./Auth/EmailPasswordLogin.js";
import LogoutButton from "./Auth/LogoutButton.jsx";
import useAuth from "./Auth/useAuth.jsx";
const LoginPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6">
      {!user ? (
        <>
          <GoogleLoginButton />
          <EmailPasswordLogin />
        </>
      ) : (
        <>
          <div className="text-xl text-gray-800">
            Welcome, {user.email || user.name}
          </div>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

{
  /*function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  ); 
} */
}

export default LoginPage;
