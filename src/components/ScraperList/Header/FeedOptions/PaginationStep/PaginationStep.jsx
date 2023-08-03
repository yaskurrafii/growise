import { useAtom, useSetAtom } from "jotai";
import { hoverActive, mode, paginationStep } from "@/stores/crawler";
import { useEffect, useState } from "react";
import { SelectPaginationButton } from "./SelectPaginationButton";
import { InputPageNumber } from "./InputPageNumber";
import { Popover } from "antd";

export const PaginationStep = ({ setFeedOptions, feedOption }) => {
  const [paginationStepVal, setPaginationStep] = useAtom(paginationStep);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const setMode = useSetAtom(mode);

  useEffect(() => {
    if (paginationStepVal === 0 && feedOption === 2) {
      setMode("pagination");
    }
    if (feedOption == 2) {
      setPopoverOpen(true);
    }
  }, [paginationStepVal, feedOption]);

  return (
    <Popover
      rootClassName="pagination-step-form"
      close={setPopoverOpen}
      open={popoverOpen}
      arrow={false}
      zIndex={1000000}
      content={
        paginationStepVal === 0 ? (
          <SelectPaginationButton
            setPopoverOpen={setPopoverOpen}
            setFeedOptions={setFeedOptions}
          />
        ) : (
          <InputPageNumber
            setPaginationStep={setPaginationStep}
            setPopoverOpen={setPopoverOpen}
            setFeedOptions={setFeedOptions}
          />
        )
      }
    ></Popover>
  );
};
