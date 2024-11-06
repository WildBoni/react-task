export default function TextFilter({ textFilter, setTextFilter }) {
  return (
    <input
      type="text"
      className="border border-gray-400 p-2 my-2 rounded-md"
      value={textFilter}
      onChange={(event) => {
        setTextFilter(event.target.value);
      }}
    />
  );
}
