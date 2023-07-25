import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { crawlerData } from "@/stores/crawler";

export const ScraperName = ({ setFormStep }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const [data, setData] = useAtom(crawlerData);

  const onSubmit = (values) => {
    const newData = { ...data, ...values };
    setData(newData);
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
          {errors.name && <p className="text-error">Crawler name is required</p>}
        </div>
        <button className="" onClick={() => setFormStep(1)}>
          Previous
        </button>
        <button type="submit" className="" onClick={() => setFormStep(2)}>
          Next
        </button>
      </form>
    </div>
  );
};
