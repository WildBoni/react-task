import { useEffect, useState } from "react";

export default function Effect() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [productId, setProductId] = useState(1);

  console.log("ciao dal componente!");

  // la funzione viene eseguita in base al contenuto dell'array.
  // se l'array è vuoto, la funzione viene eseguita solo al caricamento del componente
  // se non metto l'array, la funzione viene eseguita ad ogni re-render del componente
  // posso eseguire la funzione quando cambia un valore dentro all'array!
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [productId]);

  return (
    <div>
      <button onClick={() => setProductId(productId + 1)}>Next</button>
      <h2>{product.title}</h2>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <p>{name}</p>
    </div>
  );
}
