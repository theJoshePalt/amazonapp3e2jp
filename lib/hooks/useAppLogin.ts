import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAppLogin = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAppLogin debe usarse dentro de un AuthProvider");
  }

  const { login } = context;
  const [loading, setLoading] = useState(false);

  const authenticate = async (email: string, password: string) => {
    try {
      setLoading(true);

      const url = "http://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev" + email + "&password=" + password;
      const response = await fetch(url);
      const data = await response.json();

      if (data.length === 0) {
        setLoading(false);
        return false;
      }

      login(data[0]); // usuario encontrado
      setLoading(false);
      return true;

    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  return { authenticate, loading };
};

