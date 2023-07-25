import UIButton from "@/components/Button";

export const CrawlerItem = (props) => {
  return (
    <div className="crawler-item__container">
      <div className="crawler-item__col1">
        <input className="crawler-item__checkbox" type="checkbox"/>
        <div className="crawler-item__contents">
          <div className="crawler-item__name">KK-Day</div>
          <div className="crawler-item__location">
            <div className="crawler-item__location-name">South Korea</div>
            <div className="crawler-item__location-url">www.kkday.com</div>
          </div>
        </div>
      </div>
      <div className="crawler-item__col2">
        <div className="crawler-item__workflow">
          <UIButton size="md" colors="dark-yellow">go to workflow</UIButton>
          <div className="crawler-item__actions">
            <UIButton size="sm">Edit</UIButton>
            <UIButton size="sm">More</UIButton>
          </div>
          <div className="crawler-item__timestamp">
            last edited Time 2022.12.25 09:10
          </div>
        </div>
      </div>
    </div>
  );
};
