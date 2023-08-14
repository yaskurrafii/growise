import { useAtom } from "jotai";
import { crawlerData, dataItem } from "@/stores/crawler";
import { CreateCrawler } from "@/apis/api";
import { useNavigate } from "react-router-dom";

export const ExitToApp = () => {
  const [data, setData] = useAtom(crawlerData);
  const [item, setItem] = useAtom(dataItem);
  const navigate = useNavigate();

  const submitCrawler = (values) => {
    CreateCrawler(data).then((resp) => {
      navigate("/dashboard");
    });
  };

  return (
    <button
      onClick={() => {
        submitCrawler();
        console.log(data);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M5.83334 24.5C5.19167 24.5 4.64217 24.2713 4.18484 23.814C3.7275 23.3567 3.49922 22.8076 3.5 22.1667V17.5H5.83334V22.1667H22.1667V5.83334H5.83334V10.5H3.5V5.83334C3.5 5.19167 3.72867 4.64217 4.186 4.18484C4.64334 3.7275 5.19245 3.49922 5.83334 3.5H22.1667C22.8083 3.5 23.3578 3.72867 23.8152 4.186C24.2725 4.64334 24.5008 5.19245 24.5 5.83334V22.1667C24.5 22.8083 24.2713 23.3578 23.814 23.8152C23.3567 24.2725 22.8076 24.5008 22.1667 24.5H5.83334ZM12.25 19.8333L10.6167 18.1417L13.5917 15.1667H3.5V12.8333H13.5917L10.6167 9.85834L12.25 8.16667L18.0833 14L12.25 19.8333Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
