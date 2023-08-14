import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { crawlerData, actions } from "@/stores/crawler";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const ScraperType = ({ setFormStep }) => {
  const { handleSubmit, register } = useForm();

  const [data, setData] = useAtom(crawlerData);
  const [action, setAction] = useAtom(actions);

  const onSubmit = (values) => {
    let url = window.location.href;
    let action = [`Open Page ${url}`];
    setData((prevdata) => ({
      ...prevdata,
      url: url,
      type: values.type
    }));
    setAction(action);
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
    <div className="build__scraper-type">
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
        <Link to={`/dashboard`}>
          <Button className="ui-btn-outline-white" type="default" ghost>
            Cancel
          </Button>
        </Link>
      </form>
    </div>
  );
};
