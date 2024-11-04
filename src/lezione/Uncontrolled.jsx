import { useRef } from "react";

export default function Uncontrolled() {
  const inputRef = useRef();

  console.log("componente uncontrolled caricato!!!");

  function handleClick() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleClick()}>Clicca qui</button>
    </>
  );
}
