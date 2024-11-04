import { useState } from "react";

export default function Controlled() {
  const [inputValue, setInputValue] = useState("Davide Bonifacio");
  const [error, setError] = useState("");

  console.log("componente caricato!!!");

  function handleInput(text) {
    setInputValue(text);
    text.length < 8
      ? setError("Il campo deve avere almeno 8 caratteri")
      : setError("Campo valido!");
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => handleInput(event.target.value)}
      />
      <span>{error}</span>

      <p>{inputValue}</p>
    </>
  );
}
