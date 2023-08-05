import { formStep } from "@/stores/crawler";
import { ScraperType } from "./components/Forms/ScraperType";
import { ScraperName } from "./components/Forms/ScraperName";
import { ScraperSelect } from "./components/Forms/ScraperSelect";
import { useState } from "react";
import { createPortal } from "react-dom";

export const Scraper = () => {
  const [step, setStep] = useState(1);
  // document.getElementById("growise-crawler").style.pointerEvents = "auto";
  // document.getElementById("growise-crawler").style.backgroundColor =
  //   "#00000080";
  return (
    <div className="build-scraper">
      {step == 1 && <ScraperType setFormStep={setStep} />}
      {step == 2 && <ScraperName setFormStep={setStep} />}
      {step == 3 &&
        createPortal(<ScraperSelect setFormStep={setStep} />, document.body)}
    </div>
  );
};
