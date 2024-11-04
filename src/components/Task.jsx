export default function Task({
  taskDetails,
  deleteTask,
  updateTaskCompletion,
}) {
  // ricevo i dettagli del task (id, name, isCompleted)
  return (
    <li className={taskDetails.isCompleted ? "bg-red-300" : "bg-zinc-300"}>
      <input
        type="checkbox"
        checked={taskDetails.isCompleted}
        onChange={() => updateTaskCompletion(taskDetails.id)}
      />
      {taskDetails.name}
      {/* <button className="btn">Modifica</button> */}
      <button className="btn" onClick={() => deleteTask(taskDetails.id)}>
        Elimina
      </button>
    </li>
  );
}
