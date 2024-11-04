export default function Filters({ setFilter }) {
  return (
    <div className="filters-container">
      Filtra:
      <button onClick={() => setFilter("tutti")} className="btn">
        Tutti
      </button>
      <button onClick={() => setFilter("rimasti")} className="btn">
        Rimasti
      </button>
      <button onClick={() => setFilter("completati")} className="btn">
        Completati
      </button>
    </div>
  );
}
