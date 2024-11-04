import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";
// import dummyTasks from "./data/tasks";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  // Inizializzo l'elenco di task con un array vuoto)
  const [tasks, setTasks] = useState([]);

  // aggiungo un nuovo task all'array
  function addTask(inputText) {
    // Devo creare un oggetto di questo tipo
    // {id:2, name: 'Studia CSS', isCompleted: true}
    // Quindi creo un id, aggiungo il testo e imposto is Completed a false,
    // In pratica aggiorno l'elenco creando un nuovo array: copio quello precedente e aggiungo il nuovo task
    setTasks([
      {
        id: nanoid(),
        name: inputText,
        isCompleted: false,
      },
      ...tasks,
    ]);
  }

  function deleteTask(id) {
    // rimuovere un task dall'elenco
    // filtro l'array in base all'id dei task: se l'id corrisponde a quello cliccato nel pulsante elimina, allora NON ritorno il task
    let remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }

  function updateTaskCompletion(id) {
    // aggiornare la proprietà isCompleted del task.
    // fare un loop su tutti i task
    let updatedTasks = tasks.map((task) => {
      // trovare il task da aggiornare in base all'id
      if (task.id === id) {
        // se isCompleted è false, diventa true e viceversa
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>I miei task</h1>
      <div className="task-app">
        <Form addTask={addTask} />
        <Filters />
        <TaskContainer
          tasks={tasks}
          deleteTask={deleteTask}
          updateTaskCompletion={updateTaskCompletion}
        />
      </div>
    </>
  );
}

export default App;
