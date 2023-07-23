import Navbar from "./components/Navbar";
import Title from "./components/Title";
import FilterBar from "./components/FilterBar";
import Crawler from "./components/Crawler";

function Scraper() {
  return (
    <>
      <div id="crawler" className="growise-scraper">
        <Navbar />
        <Title />
        <div className="content-wrapper" id="content">
          <FilterBar />
          <Crawler />
        </div>
      </div>
    </>
  );
}

export default Scraper;
