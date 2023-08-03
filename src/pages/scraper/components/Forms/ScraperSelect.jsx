import { render } from "react-dom";
import { Actions } from "@/components/Tools/Actions";
import ScraperList from "@/components/ScraperList";
import { useEffect, useState } from "react";
import { handleClick } from "../../../../services/crawler_script";
import { FormGetData } from "@/components/Tools/FormGetData";
import {
  hoverActive,
  paginationBtn,
  mode,
  paginationStep,
} from "@/stores/crawler";
import { useAtom, useSetAtom } from "jotai";

export const ScraperSelect = () => {
  document.getElementById("growise-crawler").style.pointerEvents = "none";

  const setPaginationBtn = useSetAtom(paginationBtn);
  const setPaginationStep = useSetAtom(paginationStep);
  const [modeVal, setModeVal] = useAtom(mode);
  const [hoverActiveVal, setHoverActive] = useAtom(hoverActive);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [closeTips, setCloseTips] = useState(false);

  const _handleClick = (event) => {
    event.preventDefault();
    setHoveredElement(event.target);
    setHoverActive(false);
    if (modeVal === "pagination") {
      setPaginationStep(1);
      setPaginationBtn(event.target);
      setModeVal("scraper");
    } else {
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
    }
  };

  useEffect(() => {
    const handleMouseOver = (event) => {
      event.stopPropagation();
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      const classNames = Array.from(target.classList);
      if (modeVal == "scraper") {
        if (
          ["p", "a", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(
            tagName
          )
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
      } else if (
        modeVal === "pagination" &&
        (tagName === "button" || tagName === "a")
      ) {
        const classNamesToExclude = [
          "build__scraper",
          "scraper-list",
          "scraper-tools",
          "scraper-tools--form-get-data",
          "pagination-step-form",
        ];
        const hasExcludedAncestor = classNamesToExclude.some(
          (excludedClass) => {
            return target.closest(`.${excludedClass}`);
          }
        );
        if (!hasExcludedAncestor) {
          target.classList.add("highlightEl");
          target.addEventListener("click", _handleClick);
        }
      }
    };

    const handleMouseLeave = (event) => {
      event.stopPropagation();
      const target = event.target;
      target.classList.remove("highlightEl");
      target.removeEventListener("click", _handleClick);
    };

    if (hoverActiveVal) {
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
  }, [hoverActiveVal, modeVal]);

  return (
    <div className="build__scraper-select">
      <div className="build__scraper-select--tools-container d-flex flex-column position-fixed gap-2">
        <Actions />
        {!closeTips && (
          <div className="scraper-tools__tips-select d-flex justify-center flex-column">
            <div className="scraper-tools__tips-select--title">
              Start setting up the script
            </div>
            <div className="scraper-tools__tips-select--body">
              Use the mouse to select the field you want to scrape
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              onClick={() => setCloseTips(true)}
              className="position-absolute"
              style={{ top: "8px", right: "8px", cursor: "pointer" }}
            >
              <path
                d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
                fill="#616161"
              />
            </svg>
          </div>
        )}
      </div>
      <ScraperList />
    </div>
  );
};
