import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

const fetchData = async (params) => {
  const q = query(
    collection(db, "ricette"),
    where("nome", "==", params.ricette)
  );
  const querySnapshot = await getDocs(q);

  const ricetteData = querySnapshot.docs.map((doc) => ({
    nome: doc.data().nome,
    tempoPreparazione: doc.data().tempoPreparazione,
    unitaTempo: doc.data().unitaTempo,
    descrizione: doc.data().descrizione,
    categoria: doc.data().categoria,
    ingredienti: doc.data().ingredienti,
    preparazione: doc.data().preparazione,
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
  const ricetta = data;

  return (
    <div>
      <NavBar />
      <h1 className="ms-5 mb-5">{router.query.ricette}</h1>

      <div>
        {ricetta.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.nome}</h3>
            <h6>
              {recipe.tempoPreparazione} {ricetta.unitaTempo}
            </h6>
            <p>{recipe.descrizione}</p>
            <p>{recipe.categoria}</p>
            <p>{recipe.ingredienti}</p>
            <p>{recipe.preparazione}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
