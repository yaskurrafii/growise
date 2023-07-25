import { formStep } from "@/stores/crawler";
import { ScraperType } from "./components/Forms/ScraperType";
import { ScraperName } from "./components/Forms/ScraperName";
import { useAtom } from "jotai";

export const Scraper = () => {
  const [step, setStep] = useAtom(formStep);
  return (
    <div className="build-scraper">
      {step == 1 && <ScraperType setFormStep={setStep} />}
      {step == 2 && <ScraperName setFormStep={setStep} />}
    </div>
  );
};
