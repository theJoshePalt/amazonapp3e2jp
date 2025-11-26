export const useTaskEdit = () => {
    const editTask = async (id: string, title: string, description: string) => {
      try {
        const res = await fetch(
          `https://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/tareas/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
          }
        );
  
        return res.ok;
      } catch (error) {
        console.log("Error editando tarea", error);
        return false;
      }
    };
  
    return { editTask };
  };
  