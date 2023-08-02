import { useAtom, useSetAtom } from "jotai";
import { mode, paginationStep } from "@/stores/crawler";
import { useEffect, useState } from "react";
import { SelectPaginationButton } from "./SelectPaginationButton";
import { InputPageNumber } from "./InputPageNumber";

export const PaginationStep = ({ setFeedOptions, feedOption }) => {
  const [paginationStepVal, setPaginationStep] = useAtom(paginationStep);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setMode = useSetAtom(mode);

  useEffect(() => {
    if (paginationStepVal) {
      setMode("pagination");
    }
    if (feedOption != 2) {
      setPaginationStep(1);
    }
    if (feedOption == 2) {
      setIsModalOpen(true);
    }
  }, [paginationStepVal, feedOption]);

  return feedOption === 2 ? (
    <div className="pagination-step-form">
      {paginationStepVal === 1 && (
        <SelectPaginationButton setFeedOptions={setFeedOptions} />
      )}
      {paginationStepVal === 2 && (
        <InputPageNumber
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setFeedOptions={setFeedOptions}
        />
      )}
    </div>
  ) : null;
};
