import { ScraperType } from "./components/Forms/ScraperType";
import { ScraperName } from "./components/Forms/ScraperName";
import { ScraperSelect } from "./components/Forms/ScraperSelect";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Portal from "@/components/Portal";

export const Scraper = () => {
  const parentDom = document.getElementById("growise-crawler");
  const [step, setStep] = useState(1);

  parentDom.style.pointerEvents = "auto";
  parentDom.style.backgroundColor = "#00000080";

  return (
    <div className="build-scraper">
      {step == 1 && <ScraperType setFormStep={setStep} />}
      {step == 2 && <ScraperName setFormStep={setStep} />}
      {step == 3 && (
        <Portal
          rootId={"growise-crawler"}
          childId="build-scraper"
          children={<ScraperSelect />}
        />
      )}
    </div>
  );
};
