export default function Task({
  taskDetails,
  deleteTask,
  updateTaskCompletion,
}) {
  // ricevo i dettagli del task (id, name, isCompleted)
  return (
    <li className={taskDetails.isCompleted ? "completed" : ""}>
      <input
        type="checkbox"
        checked={taskDetails.isCompleted}
        onChange={() => updateTaskCompletion(taskDetails.id)}
      />
      {taskDetails.name} - {taskDetails.id}
      {/* <button className="btn">Modifica</button> */}
      <button className="btn" onClick={() => deleteTask(taskDetails.id)}>
        Elimina
      </button>
    </li>
  );
}
