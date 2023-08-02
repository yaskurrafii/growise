import { feedOption } from "@/stores/crawler";
import { useAtom } from "jotai";
import { useState } from "react";
import { DropdownOptions } from "./DropdownOptions";
import PaginationStep from "./PaginationStep";

export const FeedOptions = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [feedOptionVal, setFeedOption] = useAtom(feedOption);

  return (
    <div className="position-relative">
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className="scraper-list__header__right--dropdown-btn d-flex align-items-center gap-3"
      >
        <span>page feed option</span>
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8934 0.571289H9.88891C9.82061 0.571289 9.75632 0.604771 9.71614 0.659682L5.91123 5.90433L2.10632 0.659682C2.06614 0.604771 2.00186 0.571289 1.93355 0.571289H0.92909C0.842036 0.571289 0.791143 0.670396 0.842036 0.741379L5.56436 7.25165C5.73579 7.48736 6.08668 7.48736 6.25677 7.25165L10.9791 0.741379C11.0313 0.670396 10.9804 0.571289 10.8934 0.571289Z"
            fill="black"
            fill-opacity="0.25"
          />
        </svg>
      </button>
      {openDropdown && <DropdownOptions setOpenDropdown={setOpenDropdown} />}
      {feedOptionVal == 2 && (
        <PaginationStep
          setFeedOptions={setFeedOption}
          feedOption={feedOptionVal}
        />
      )}
    </div>
  );
};
