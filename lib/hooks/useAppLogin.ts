import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export const useAppLogin = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAppLogin debe usarse dentro de un AuthProvider");

  const { login } = context;
  const [loading, setLoading] = useState(false);

  const API_URL = "https://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev";

  const authenticate = async (email: string, password: string) => {
    try {
      setLoading(true);

      const response = await axios.get(`${API_URL}/users`, {
        params: { email, password },
      });

      const data = response.data;

      if (data.length === 0) {
        setLoading(false);
        return false;
      }

      login(data[0]);
      setLoading(false);
      return true;

    } catch (error) {
      console.log("ERROR LOGIN:", error);
      setLoading(false);
      return false;
    }
  };

  return { authenticate, loading };
};
