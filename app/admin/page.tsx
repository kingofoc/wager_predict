import AddGames from "../components/AddGames"
import NavBarAdmin from "../components/NavBarAdmin"

export default function Admin() {
 return (
  <>
   <div className="flex flex-col sm:flex-row gap-10">
    <NavBarAdmin />

    <AddGames />
   </div>
  </>
 )
}
;