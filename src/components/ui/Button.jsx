export default function Button({ text, onClick }) {
  return (
    <button
      className="rounded-md hover:bg-sky-800 hover:text-white bg-green-300 py-2 px-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
