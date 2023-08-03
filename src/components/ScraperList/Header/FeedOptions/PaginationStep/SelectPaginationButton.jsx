import { Tips } from "@/components/Tools/Tips";
import UIButton from "@/components/Button";
export const SelectPaginationButton = ({ setFeedOptions, setPopoverOpen }) => {
  const cancelPagination = () => {
    setPopoverOpen(false);
    setFeedOptions(1);
  };
  const closePopover = () => {
    setPopoverOpen(false);
  };
  return (
    <Tips tipsFor="pagination">
      <div className="scraper-tools__tips-pagination--title">
        Please select a click pagination button or cancel
      </div>
      <UIButton
        onClick={cancelPagination}
        size="sm"
        variant="outline"
        color="blue"
      >
        Cancel
      </UIButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        onClick={closePopover}
        className="position-absolute"
        style={{ cursor: "pointer", top: "8px", right: "8px" }}
      >
        <path
          d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
          fill="#616161"
        />
      </svg>
    </Tips>
  );
};
