import NavBar from "@/components/organisms/NavBar"
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, 'ricette'));
  const ricetteData = querySnapshot.docs.map((doc) => ({
    nome: doc.data().nome,
    tempoPreparazione: doc.data().tempoPreparazione,
    unitaTempo: doc.data().unitaTempo,
    descrizione: doc.data().descrizione,
    categoria: doc.data().categoria
  }));

  return ricetteData;  
};

export async function getServerSideProps(context) {
  const { params } = context;
  const data = await fetchData(params);
  return { props: { data } }
}

export default function Home({ data }) {
  const ricette = data;
  return (
    <div>
      <NavBar />
      <h1>Home Page!</h1>
      <div>
          {ricette.length === 0 ? (
            <p>Nessuna ricetta trovata.</p>
          ) : (
            <div>
              {ricette.map((ricetta) => (
                <div key={ricetta.id}>
                  <h3>{ricetta.nome}</h3>
                  <h6>{ricetta.categoria}</h6>
                  <h6>{ricetta.tempoPreparazione} {ricetta.unitaTempo}</h6>
                  <p>{ricetta.descrizione}</p>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}