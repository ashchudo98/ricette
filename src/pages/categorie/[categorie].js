import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import AddRicette from "@/components/organisms/AddRicette";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { Card, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

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
          <>
            {ricette.map((ricetta) => (
              <Container
                key={ricetta.id}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                className="prova"
              >
                <Card className="card" key={ricetta.id}>
                  <Card.Body
                    as={Link}
                    href={`/ricette/${ricetta.nome}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Title as={Card} className="recipeName">
                      <h5>{ricetta.nome}</h5>
                    </Card.Title>
                    <Card.Subtitle as={Card} className="recipeTime mb-2">
                      {ricetta.tempoPreparazione} {ricetta.unitaTempo}
                    </Card.Subtitle>
                    <Card.Text as={Card} className="recipeDescription">
                      {ricetta.descrizione}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Image
                  src={`/images/${ricetta.nome}.png`}
                  className="recipeImage"
                  width={200}
                  height={20}
                  alt={ricetta.nome}
                />
              </Container>
            ))}
          </>
        )}
      </div>
    </>
  );
}
