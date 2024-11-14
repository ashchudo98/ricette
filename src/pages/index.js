import NavBar from "@/components/organisms/NavBar"
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
import { Card } from "react-bootstrap";

// Fetch data from Firestore
const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, 'ricette'));  // Get all documents in the 'ricette' collection
  const ricetteData = querySnapshot.docs.map((doc) => ({
    id: doc.id,  // Ensure each document has a unique ID
    nome: doc.data().nome,
    tempoPreparazione: doc.data().tempoPreparazione,
    unitaTempo: doc.data().unitaTempo,
    descrizione: doc.data().descrizione,
    categoria: doc.data().categoria
  }));

  return ricetteData;  
};

// Server-side props
export async function getServerSideProps() {
  const data = await fetchData();  // No need for params
  return { props: { data } };
}

// Main component
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
              <Card key={ricetta.id} style={{ width: '50rem' }} className="mx-auto mt-3">  
                <Card.Body>
                  <Card.Title>{ricetta.nome}</Card.Title>
                  <Card.Subtitle>
                    {ricetta.categoria} | {ricetta.tempoPreparazione} {ricetta.unitaTempo}
                  </Card.Subtitle> 
                  <Card.Text>{ricetta.descrizione}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
