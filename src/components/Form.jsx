import { useRef } from "react";

export default function Form({ addTask }) {
  // uso un ref per accedere al testo scritto dall'utente nell'input
  const inputRef = useRef();

  // aggiungo un task
  function handleAddTask() {
    // addTask arriva come prop e serve ad aggiornare l'elenco dei task
    addTask(inputRef.current.value);
  }
  return (
    <>
      <h2>Che cosa devi fare?</h2>
      <input type="text" ref={inputRef} />
      <button className="btn" onClick={handleAddTask}>
        Aggiungi
      </button>
    </>
  );
}
