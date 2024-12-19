import { useRouter } from "next/router";
import NavBar from "@/components/organisms/NavBar";
import AddRicette from "@/components/organisms/AddRicette";

export default function Categorie() {
  const router = useRouter();

    if (router.query.categorie === "addRecipe") {
      return (
        <>
          <NavBar />
          <AddRicette />
        </>
      );
    } else {
      return <>
      <NavBar />
      {/* {router.query.categorie} */}
      </>;
    }
  
}
  