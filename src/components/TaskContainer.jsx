import TaskCounter from "./TaskCounter";
import Tasks from "./Tasks";

export default function TaskContainer({
  tasks,
  deleteTask,
  updateTaskCompletion,
}) {
  let taskAmount = tasks.length;

  return (
    <section>
      <TaskCounter amount={taskAmount} />
      <Tasks
        tasksArray={tasks}
        deleteTask={deleteTask}
        updateTaskCompletion={updateTaskCompletion}
      />
    </section>
  );
}
