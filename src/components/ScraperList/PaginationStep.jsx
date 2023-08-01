import UIButton from "../Button";
import { Tips } from "../Tools/Tips";
export const PaginationStep = () => {
  return (
    <Tips tipsFor="pagination">
      <div className="scraper-tools__tips-pagination--title">
        Please select a click pagination button or cancel
      </div>
      <UIButton size="sm" variant="outline" color="blue">
        Cancel
      </UIButton>
    </Tips>
  );
};
