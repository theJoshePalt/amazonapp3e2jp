import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/tareas"
      );

      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log("❌ Error cargando tareas", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return { tasks, loading, loadTasks };
};
