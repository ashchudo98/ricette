
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default function Page() {
    /*const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "ricette"));
        querySnapshot.forEach((doc) => {
        console.log(doc.data().ingredienti);
      });
    };*/

    return (
    <div>
      <h1>Prova</h1>
    </div>
  );
}
