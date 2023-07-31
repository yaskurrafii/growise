import { crawlerData } from "@/stores/crawler";
import { useAtom } from "jotai";

export const Actions = () => {
  const [data, setData] = useAtom(crawlerData);
  return (
    <div className="scraper-tools__actions position-relative rounded-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        className="position-absolute"
        style={{ top: "13px", right:"12px" }}
      >
        <path
          d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
          fill="white"
        />
      </svg>
      <div className="scraper-tools__actions-title">
        Actions
      </div>

      <div className="scraper-tools__actions-body">
        {data.actions.length > 0 &&
          data.actions.map(() => (
            <div className="scraper-tools__actions-body--data"></div>
          ))}
        <div className="scraper-tools__actions-body--special-field">
          +Add Special Field(URL,Time, etc...)
        </div>
      </div>
    </div>
  );
};
