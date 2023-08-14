import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { crawlerData } from "@/stores/crawler";
import UIButton from "@/components/Button";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

export const ScraperType = ({ setFormStep }) => {
  const { t } = useTranslation();
  const { handleSubmit, register } = useForm();

  const [data, setData] = useAtom(crawlerData);

  const onSubmit = (values) => {
    data.type = values.type;
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
              <h2>{t("scraper.type.single.name")}</h2>
              <p>{t("scraper.type.single.description")}</p>
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
              <h2>{t("scraper.type.list.name")}</h2>
              <p>{t("scraper.type.list.description")}</p>
            </div>
          </label>
        </div>
        <Link to={`/dashboard`}>
          <Button className="ui-btn-outline-white" type="default" ghost>
            {t("button.text.cancel")}
          </Button>
        </Link>
      </form>
    </div>
  );
};
