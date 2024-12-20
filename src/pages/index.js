import NavBar from "@/components/organisms/NavBar";
import CardCustom from "@/components/organisms/CardCustom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "ricette"));
  const ricetteData = querySnapshot.docs.map((doc) => ({
    nome: doc.data().nome,
    tempoPreparazione: doc.data().tempoPreparazione,
    unitaTempo: doc.data().unitaTempo,
    descrizione: doc.data().descrizione,
    categoria: doc.data().categoria,
  }));

  return ricetteData;
};

export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

export default function Home({ data }) {
  const ricette = data;

  return (
    <>
      <NavBar />
      <div className="recipe-body">
        <h1>{Home}</h1>
        {ricette.length === 0 ? (
          <p>Nessuna ricetta trovata.</p>
        ) : (
          ricette.map((ricetta) => (
            <CardCustom
              className="prova"
              key={ricetta.id}
              title={ricetta.nome}
              sub={`${ricetta.tempoPreparazione} ${ricetta.unitaTempo}`}
              text={ricetta.descrizione}
              href={`/ricette/${ricetta.nome}`}
              src={`/images/${ricetta.nome}.png`}
              alt={ricetta.nome}
            />
          ))
        )}
      </div>
    </>
  );
}
