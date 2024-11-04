import Task from "./Task";

export default function Tasks({
  tasksArray,
  deleteTask,
  updateTaskCompletion,
}) {
  // faccio un ciclo nell'array di task e creo il componente
  const taskList = tasksArray.map((task) => (
    <Task
      taskDetails={task}
      key={task.id}
      deleteTask={deleteTask}
      updateTaskCompletion={updateTaskCompletion}
    />
  ));

  return <ul>{taskList}</ul>;
}
