import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import AddRicette from "@/components/organisms/AddRicette";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import CardCustom from "@/components/organisms/CardCustom";

const fetchData = async (params) => {
  const q = query(
    collection(db, "ricette"),
    where("categoria", "==", params.categorie)
  );
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
  return { props: { data } };
}

export default function Page({ data }) {
  const router = useRouter();
  const ricette = data;

  if (router.query.categorie === "addRecipe") {
    return (
      <div>
        <NavBar />
        <AddRicette />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="recipe-body">
        <h1>{router.query.categorie}</h1>
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
