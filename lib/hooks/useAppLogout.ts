import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAppLogout = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAppLogout debe usarse dentro de un AuthProvider");
  }

  const { logout } = context;

  return { logout };
};
