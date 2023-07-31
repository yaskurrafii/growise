import { Tips } from "@/components/Tools/Tips";
import { Actions } from "@/components/Tools/Actions";
import ScraperList from "@/components/ScraperList";
import { useEffect, useState } from "react";
import { handleClick } from "../../../../services/crawler_script";

export const ScraperSelect = () => {
  document.getElementById("growise-crawler").style.pointerEvents = "none";
  const [hoveredElement, setHoveredElement] = useState(null);
  // const [data, setData] = useAtom(crawlerData);

  useEffect(() => {
    const handleMouseOver = (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      var content = "";
      setHoveredElement(null);
      if (
        ["p", "a", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(tagName)
      ) {
        setHoveredElement(target);
        content = target.innerText || target.textContent;
        document.addEventListener("click", handleClick);
        console.log(content);
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

  useEffect(() => {
    if (hoveredElement) {
      hoveredElement.classList.add("highlightEl");
    }

    return () => {
      if (hoveredElement) {
        hoveredElement.classList.remove("highlightEl"); // Reset background color when element is no longer hovered
      }
    };
  }, [hoveredElement]);

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
