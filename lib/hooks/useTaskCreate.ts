import { useState } from "react";

export const useTaskCreate = () => {
  const [loading, setLoading] = useState(false);

  const createTask = async (title: string, description: string) => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/tareas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
          }),
        }
      );

      return res.ok; // true si se creó
    } catch (error) {
      console.log("❌ Error creando tarea", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { createTask, loading };
};
