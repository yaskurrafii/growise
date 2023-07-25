import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { crawlerData } from "@/stores/crawler";
import { useEffect } from "react";
import UIButton from "@/components/Button";

export const ScraperType = ({ setFormStep }) => {
  const { handleSubmit, register } = useForm();

  const setData = useSetAtom(crawlerData);

  const onSubmit = (data) => {
    setData({ ...data });
    setFormStep(2);
  };

  const handleLabelClick = (value) => {
    const form = document.getElementById("scraper-type-form");
    const radioInput = document.getElementById(value + "-page");
    if (form && radioInput) {
      radioInput.checked = true;
      onSubmit({ type: value });
    }
  };
  return (
    <>
      <form id="scraper-type-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Build Scraper on this page</h2>
        <div className="build-scraper__wrapper">
          <label
            className="build-scraper__single"
            htmlFor="single-page"
            onClick={() => handleLabelClick("single")}
          >
            <input
              type="radio"
              id="single-page"
              name="single"
              value="single"
              {...register("type")}
            />
            <div className="build-scraper__single-img">
              <img src="src/assets/images/single_page.png" alt="single-page" />
            </div>
            <div className="build-scraper__single-helper">
              <h2>Single Page</h2>
              <p>
                Get data from a single page <br /> Example: user profile or
                article pages
              </p>
            </div>
          </label>
          <label
            className="build-scraper__list"
            htmlFor="list-page"
            onClick={() => handleLabelClick("list")}
          >
            <input
              type="radio"
              id="list-page"
              value="list"
              name="single"
              {...register("type")}
            />
            <div className="build-scraper__list-img">
              <img src="src/assets/images/list_page.png" alt="list-page" />
            </div>
            <div className="build-scraper__list-helper">
              <h2>List Page</h2>
              <p>
                Grab multiple items from a list, page-capable fetching
                <br />
                Example: get a list of products or profiles from a search
              </p>
            </div>
          </label>
        </div>
        <UIButton size="sm" variant="outline" color="white">
          Cancel
        </UIButton>
      </form>
    </>
  );
};
