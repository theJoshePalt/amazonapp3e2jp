export const useTaskDelete = () => {
    const deleteTask = async (id: string) => {
      try {
        const res = await fetch(
          `https://3000-firebase-amazonapp3e2jp-1762962187400.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/tareas/${id}`,
          {
            method: "DELETE",
          }
        );
  
        return res.ok;
      } catch (error) {
        console.log("Error borrando tarea", error);
        return false;
      }
    };
  
    return { deleteTask };
  };
  