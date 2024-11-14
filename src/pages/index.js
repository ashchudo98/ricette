import NavBar from "@/components/organisms/NavBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Card } from "react-bootstrap";
import Link from "next/link";

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
    <div>
      <NavBar />
      <h1 className="ms-5 mb-5">Home Page!</h1>
      <div>
        {ricette.length === 0 ? (
          <p>Nessuna ricetta trovata.</p>
        ) : (
          <div>
            {ricette.map((ricetta) => (
              <Card
                key={ricetta.id}
                style={{ width: "50rem" }}
                className="mx-auto mt-3"
              >
                <Card.Body
                  as={Link}
                  href={`/ricette/${ricetta.nome}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card.Title>{ricetta.nome}</Card.Title>
                  <Card.Subtitle>
                    {ricetta.categoria} | {ricetta.tempoPreparazione}{" "}
                    {ricetta.unitaTempo}
                  </Card.Subtitle>
                  <Card.Text>{ricetta.descrizione}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
