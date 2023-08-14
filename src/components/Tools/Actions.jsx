import { actions } from "@/stores/crawler";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const Actions = () => {
  const [action, setAction] = useAtom(actions);

  useEffect(() => {
    console.log(action);
  }, [action])

  return (
    <div className="scraper-tools__actions position-relative rounded-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        className="position-absolute"
        style={{ top: "13px", right: "12px" }}
      >
        <path
          d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
          fill="white"
        />
      </svg>
      <div className="scraper-tools__actions-title">Actions</div>

      <div className="scraper-tools__actions-body">
        <ol>
          {action.length > 0 &&
            action.map((action) => (
              <li className="scraper-tools__actions-body--data">{action}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};
