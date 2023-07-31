import { Tips } from "@/components/Tools/Tips";
import { Actions } from "@/components/Tools/Actions";
import ScraperList from "@/components/ScraperList";
import { useEffect } from "react";

export const ScraperSelect = () => {
  document.getElementById("growise-crawler").style.pointerEvents = "none";
  useEffect(() => {
    const handleMouseOver = (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      if (["p", "a", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(tagName)) {
        target.classList.add("highlightEl");
      }
    };

    const handleMouseLeave = (event) => {
      const target = event.target;
      target.classList.remove("highlightEl");
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseLeave);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);
  return (
    <div className="build__scraper-select">
      <div className="build__scraper-select--tools-container d-flex flex-column position-fixed gap-2">
        <Actions />
        <Tips>
          <div className="tips-title">Start setting up the script</div>
          <div className="tips-body">
            Use the mouse to select the field you want to scrape
          </div>
        </Tips>
      </div>
      <ScraperList />
    </div>
  );
};
