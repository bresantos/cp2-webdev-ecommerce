import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SectionContainer from "../components/SectionContainer";

export default function Home() {
  const [eletronicos, setEletronicos] = useState([]);
  const [joias, setJoias] = useState([]);
  const [roupasMasculinas, setRoupasMasculinas] = useState([]);

  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
     fetch(`${API}products/category/electronics`, {})
      .then(res => res.json())
      .then(data => {setEletronicos(data.items) })
      .catch(err => console.error(err));

     fetch(`${API}products/category/jewelery`, {})
      .then(res => res.json())
      .then(data => setJoias(data.items))
      .catch(err => console.error(err));

     fetch(`${API}products/category/men's%20clothing`, {})
      .then(res => res.json())
      .then(data => setRoupasMasculinas(data.items))
      .catch(err => console.error(err));
  }, [API]);

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        <>
        {eletronicos.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Joias">
        <>
        {joias.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        <>
        {roupasMasculinas.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>
    </div>
  );
}