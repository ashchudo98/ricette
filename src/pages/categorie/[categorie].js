import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import FormAddRicetta from "@/components/organisms/FormAddRicetta";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { Card } from "react-bootstrap";
import Link from "next/link";

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
  useEffect(() => {
    if (router.query.categorie !== "aggiungiRicetta") {
    }
  }, [router.query.categorie]);

  if (router.query.categorie === "aggiungiRicetta") {
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
      <h1 className="ms-5 mb-5">{router.query.categorie}</h1>
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
                    {ricetta.tempoPreparazione} {ricetta.unitaTempo}
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