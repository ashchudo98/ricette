import { useRouter } from 'next/router'
import NavBar from '@/components/organisms/NavBar'
import FormAddRicetta from '@/components/organisms/FormAddRicetta'

export default function Page() {
  const router = useRouter()
  if(router.query.categorie === 'Aggiungi Ricetta') {
    return(
        <div>
            <NavBar />
            <FormAddRicetta />
        </div>
    )
  } 
  return (
    <div>
      <NavBar />
      <h1>{router.query.categoryId}</h1>
    </div>
  )
}