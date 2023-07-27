import Navbar from "./components/Navbar";
import Title from "./components/Title";
import FilterBar from "./components/FilterBar";
import Crawler from "./components/Crawler";

function Dashboard() {
  return (
    <>
      <div id="crawler" className="growise-scraper">
        <Navbar />
        <Title />
        <div className="content-wrapper">
          <FilterBar />
          <Crawler />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
