import { Tips } from "@/components/Tools/Tips";
import { render } from "react-dom";
import { Actions } from "@/components/Tools/Actions";
import ScraperList from "@/components/ScraperList";
import { useEffect, useState } from "react";
import { handleClick } from "../../../../services/crawler_script";
import { FormGetData } from "@/components/Tools/FormGetData";
import { hoverActive } from "@/stores/crawler";
import { useAtom } from "jotai";

export const ScraperSelect = () => {
  document.getElementById("growise-crawler").style.pointerEvents = "none";
  const [_hoverActive, setHoverActive] = useAtom(hoverActive);
  const [hoveredElement, setHoveredElement] = useState(null);

  const _handleClick = (event) => {
    event.preventDefault();
    setHoveredElement(event.target);
    setHoverActive(false);
    var { x, y } = event.target.getBoundingClientRect();
    handleClick(event);

    var content = event.target.innerText || event.target.textContent;

    const container = document.createElement("div");
    container.className = "scraper-tools--form-get-data-container";
    container.style.position = "absolute";
    container.style.left = `${window.scrollX + x}px`;
    container.style.top = `${
      window.scrollY + y + event.target.offsetHeight + 6
    }px`;
    container.style.width = "241px";
    container.style.height = "223px";
    container.style.zIndex = "100000";

    render(<FormGetData content={content} />, container);
    document.body.insertAdjacentElement("afterbegin", container);
  };

  useEffect(() => {
    const handleMouseOver = (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      const classNames = Array.from(target.classList);
      if (
        ["p", "a", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(tagName)
      ) {
        const classNamesToExclude = [
          "build__scraper",
          "scraper-list",
          "scraper-tools",
          "scraper-tools--form-get-data",
        ];
        if (
          !classNames.some((className) =>
            classNamesToExclude.some((excludedClass) =>
              className.startsWith(excludedClass)
            )
          )
        ) {
          const hasExcludedAncestor = classNamesToExclude.some(
            (excludedClass) => {
              return target.closest(`.${excludedClass}`) !== null;
            }
          );

          if (hasExcludedAncestor) {
            return;
          }

          target.classList.add("highlightEl");
          target.addEventListener("click", _handleClick);
        }
      }
    };

    const handleMouseLeave = (event) => {
      const target = event.target;
      target.classList.remove("highlightEl");
      target.removeEventListener("click", _handleClick);
    };

    if (_hoverActive) {
      const formContainer = document.querySelector(
        ".scraper-tools--form-get-data-container"
      );
      if (formContainer !== null) {
        formContainer.remove();
        hoveredElement.classList.remove("highlightEl");
      }
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseLeave);
    }
    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [_hoverActive]);

  return (
    <div className="build__scraper-select">
      <div className="build__scraper-select--tools-container d-flex flex-column position-fixed gap-2">
        <Actions />
        <Tips tipsFor="select">
          <div className="scraper-tools__tips-select--title">
            Start setting up the script
          </div>
          <div className="scraper-tools__tips-select--body">
            Use the mouse to select the field you want to scrape
          </div>
        </Tips>
      </div>
      <ScraperList />
    </div>
  );
};
