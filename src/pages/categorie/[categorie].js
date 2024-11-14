import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/organisms/NavBar';
import FormAddRicetta from '@/components/organisms/FormAddRicetta';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';

const fetchData = async (params) => {
  const q = query(collection(db, 'ricette'), where('categoria', '==', params.categorie));
  const querySnapshot = await getDocs(q);

  const ricetteData = querySnapshot.docs.map((doc) => ({
    nome: doc.data().nome,
    tempoPreparazione: doc.data().tempoPreparazione,
    unitaTempo: doc.data().unitaTempo,
    descrizione: doc.data().descrizione,
  }));

  return ricetteData;  
};

export async function getServerSideProps(context) {
  const { params } = context;
  const data = await fetchData(params);
  return { props: { data } }
}

export default function Page({ data }) {
  const router = useRouter();
  const ricette = data;
  useEffect(() => {

    if (router.query.categorie !== 'aggiungiRicetta') {
      
    }
  }, [router.query.categorie]);

  if (router.query.categorie === 'aggiungiRicetta') {
    return (
      <div>
        <NavBar />
        <FormAddRicetta />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{router.query.categorie}</h1>
        <div>
          {ricette.length === 0 ? (
            <p>Nessuna ricetta trovata per questa categoria.</p>
          ) : (
            <div>
              {ricette.map((ricetta) => (
                <div key={ricetta.id}>
                  <h3>{ricetta.nome}</h3>
                  <h6>{ricetta.tempoPreparazione} {ricetta.unitaTempo}</h6>
                  <p>{ricetta.descrizione}</p>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  );
}
