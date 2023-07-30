import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { crawlerData } from "@/stores/crawler";
import UIButton from "@/components/Button";

export const ScraperName = ({ setFormStep }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const [data, setData] = useAtom(crawlerData);

  const onSubmit = (values) => {
    data.name = values.name;
    setData({ ...data });
  };

  return (
    <div className="build__scraper-name">
      <h1>Build a web crawler on this page</h1>
      <form id="scraper-form-name" onSubmit={handleSubmit(onSubmit)}>
        <h2>Web Crawler Name</h2>
        <h3>You can change the crawler name later and at any time</h3>
        <div className="">
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-error">Crawler name is required</p>
          )}
        </div>
      </form>
      <div className="build__scraper-name-navigation">
        <UIButton
          size="sm"
          variant="outline"
          color="white"
          onClick={() => setFormStep(1)}
        >
          Previous
        </UIButton>
        <UIButton
          size="sm"
          variant="outline"
          color="white"
          onClick={() => setFormStep(3)}
        >
          Next
        </UIButton>
      </div>
    </div>
  );
};
