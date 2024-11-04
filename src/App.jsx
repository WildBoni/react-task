import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";
// import dummyTasks from "./data/tasks";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App({ savedTasks }) {
  // Inizializzo l'elenco di task con l'elenco di task presenti in localStorage, OPPURE con un array vuoto)
  const [tasks, setTasks] = useState(savedTasks || []);
  const [filter, setFilter] = useState("tutti");

  // filtro l'elenco di task
  let filteredTasks = tasks.filter((task) => {
    // lo filtro in base alla stringa contenuta in filter
    // "tutti" "rimasti" "completati"
    // se il filtro è "rimasti", allora recupero i task con proprietà isCompleted: false
    // ritorno il risultato alla variabile filteredTasks
    if (filter === "completati") return task.isCompleted;
    if (filter === "rimasti") return !task.isCompleted;
    if (filter === "tutti") return true;
  });

  useEffect(() => {
    // salvo i tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      <h1>I miei task {filter}</h1>
      <div className="task-app">
        <Form addTask={addTask} />
        <Filters setFilter={setFilter} />
        <TaskContainer
          tasks={filteredTasks}
          deleteTask={deleteTask}
          updateTaskCompletion={updateTaskCompletion}
        />
      </div>
    </>
  );
}

export default App;
