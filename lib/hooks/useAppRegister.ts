import { useState } from "react";
import axios from "axios";

export const useAppRegister = () => {
  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev";

  const registerUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);

      // 1️⃣ Verificar si el usuario YA existe
      const check = await axios.get(`${API_URL}/users`, {
        params: { email },
      });

      if (check.data.length > 0) {
        setLoading(false);
        return { ok: false, error: "El correo ya está registrado" };
      }

      // 2️⃣ Crear nuevo usuario
      const newUser = await axios.post(`${API_URL}/users`, {
        username,
        email,
        password,
      });

      setLoading(false);

      return { ok: true, user: newUser.data };

    } catch (error) {
      console.log("REGISTER ERROR:", error);
      setLoading(false);
      return { ok: false, error: "Error al registrar usuario" };
    }
  };

  return { registerUser, loading };
};
