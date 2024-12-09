import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import AddRicette from "@/components/organisms/AddRicette";

export default function Categorie() {
  const router = useRouter();
  switch (router.query.categorie) {
    case "antipasti":
      return <h1>Antipasti</h1>;
    case "primi":
      return <h1>Primi</h1>;
    case "secondi":
      return <h1>Secondi</h1>;
    case "contorni":
      return <h1>Contorni</h1>;
    case "dolci":
      return <h1>Dolci</h1>;
    case "addRecipee":
      return (
        <div>
          <NavBar />
          <AddRicette />
        </div>
      );
    default:
      return <h1>Categoria non trovata</h1>;
  }
}
