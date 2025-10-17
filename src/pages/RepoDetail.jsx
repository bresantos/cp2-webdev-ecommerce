import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    console.log("ID do produto:", id);
    async function fetchRepo() {
      const res = await fetch(`https://fakestoreapi.com/products/category/nome-categoria/${id}`);
      const data = await res.json();
      console.log("data", data);
      setDetails(data);
    }
    fetchRepo();
  }, [id]);

  if (!details) return <p>Carregando...</p>;

  return (
    <div className="p-6 mx-auto grid grid-cols-2 text-white shadow rounded">
      <ul className="space-y-2 text-gray-400">
        <li><strong>Imagem:</strong> <img src={details.image} alt={details.title} className="w-32 h-32 object-cover" /></li>
        <li><strong>Titulo:</strong> {details.title}</li>
        <li><strong>Nota:</strong> {details.rating}</li>
        <li><strong>Valor:</strong> {details.price}</li>
        <li><strong>Ver detalhes:</strong> {details.description}</li>
        <a
          href={details.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border border-red-700 text-red-700 px-4 py-2 rounded"
        >
          pipipipipi
        </a>
      </ul>
    </div>
  );
}