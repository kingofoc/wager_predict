import DateDrawer from "./components/DateDrawer";
import Header from "./components/Header";
import SportsDrawer from "./components/SportsDrawer";

export default function Home() {
  return (
    <>
      <div>
        <Header />

        <main>
          <DateDrawer />
          <SportsDrawer />
        </main>
        
      </div>
    </>
  );
}
