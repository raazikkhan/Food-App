import useAuth from "./useAuth";
import { Button } from "@mui/material";

export default function LogoutButton() {
  const { logout } = useAuth();
  return (
    <Button
      variant="contained"
      className="w-full !bg-gray-600 !text-white"
      onClick={logout}
    >
      Logout
    </Button>
  );
}
