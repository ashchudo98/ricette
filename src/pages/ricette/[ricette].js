import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { Accordion } from "react-bootstrap";

const fetchData = async (params) => {
  const q = query(
    collection(db, "ricette"),
    where("nome", "==", params.ricette)
  );
  const querySnapshot = await getDocs(q);

  const ricetteData = querySnapshot.docs.map((doc) => ({
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
    <>
      <NavBar />
      <div className="container mt-5">
        <h1>{router.query.ricette}</h1>
        <div>
          {ricetta.map((recipe) => (
            <div key={recipe.id}>
              <ul
                style={{
                  columnCount: 2,
                }}
              >
                {recipe.ingredienti.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Accordion>
                {recipe.preparazione.map((step, index) => (
                  <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header>Step #{index + 1}</Accordion.Header>
                    <Accordion.Body>{step}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}