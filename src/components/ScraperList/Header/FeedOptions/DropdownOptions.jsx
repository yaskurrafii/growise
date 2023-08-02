import { Radio, Space } from "antd";
import { useAtom, useSetAtom } from "jotai";
import { feedOption, mode } from "@/stores/crawler";

export const DropdownOptions = ({ setOpenDropdown }) => {
  const [feedOptionVal, setFeedOption] = useAtom(feedOption);
  const setMode = useSetAtom(mode);

  const onChangeFeedOption = (event) => {
    setFeedOption(event.target.value);
    if (feedOptionVal === 2) {
      setMode("pagination");
    }
  };

  return (
    <div className="scraper-list__header__right--dropdown-items position-absolute">
      <Radio.Group
        className="scraper-list__header__right--dropdown-items-radio"
        onChange={onChangeFeedOption}
        value={feedOptionVal}
      >
        <Space
          className="scraper-list__header__right--dropdown-items-container"
          direction="vertical"
        >
          <Radio id="no-pagination" value={1}>
            No Pagination
          </Radio>
          <Radio id="click-pagination" value={2}>
            <Space size={0} direction="vertical">
              Click Pagination
              <span className="scraper-list__header__right--dropdown-items--desc">
                當列表項分佈在多個頁面時使用此選項。 選擇下一頁按鈕。
              </span>
            </Space>
          </Radio>
          <Radio id="infinite-scroll" value={3}>
            <Space size={0} direction="vertical">
              Infinite Scroll
              <span className="scraper-list__header__right--dropdown-items--desc">
                當新的列表項是通過捲軸條滾動而增加時，請使用此滾動接頁。
              </span>
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 0C2.02065 0 1.32118 0.280951 0.805456 0.781048C0.289731 1.28115 0 1.95942 0 2.66667V13.3333C0 14.0406 0.289731 14.7189 0.805456 15.219C1.32118 15.719 2.02065 16 2.75 16H19.25C19.9793 16 20.6788 15.719 21.1945 15.219C21.7103 14.7189 22 14.0406 22 13.3333V2.66667C22 1.95942 21.7103 1.28115 21.1945 0.781048C20.6788 0.280951 19.9793 0 19.25 0H2.75ZM1.375 2.66667C1.375 2.31304 1.51987 1.97391 1.77773 1.72386C2.03559 1.47381 2.38533 1.33333 2.75 1.33333H10.3125V14.6667H2.75C2.38533 14.6667 2.03559 14.5262 1.77773 14.2761C1.51987 14.0261 1.375 13.687 1.375 13.3333V2.66667ZM11.6875 14.6667V1.33333H19.25C19.6147 1.33333 19.9644 1.47381 20.2223 1.72386C20.4801 1.97391 20.625 2.31304 20.625 2.66667V13.3333C20.625 13.687 20.4801 14.0261 20.2223 14.2761C19.9644 14.5262 19.6147 14.6667 19.25 14.6667H11.6875ZM19.0492 9.528C19.1133 9.58993 19.1641 9.6635 19.1987 9.74449C19.2334 9.82548 19.2512 9.91231 19.2512 10C19.2512 10.0877 19.2334 10.1745 19.1987 10.2555C19.1641 10.3365 19.1133 10.4101 19.0492 10.472L16.2992 13.1387C16.2354 13.2008 16.1595 13.25 16.076 13.2836C15.9925 13.3172 15.9029 13.3345 15.8125 13.3345C15.7221 13.3345 15.6325 13.3172 15.549 13.2836C15.4655 13.25 15.3896 13.2008 15.3258 13.1387L12.5758 10.472C12.4467 10.3468 12.3741 10.177 12.3741 10C12.3741 9.82297 12.4467 9.65318 12.5758 9.528C12.7048 9.40282 12.8799 9.33249 13.0625 9.33249C13.2451 9.33249 13.4202 9.40282 13.5492 9.528L15.8125 11.724L18.0758 9.528C18.1396 9.46592 18.2155 9.41666 18.299 9.38305C18.3825 9.34944 18.4721 9.33214 18.5625 9.33214C18.6529 9.33214 18.7425 9.34944 18.826 9.38305C18.9095 9.41666 18.9854 9.46592 19.0492 9.528ZM19.0492 5.528C19.1783 5.65318 19.2509 5.82297 19.2509 6C19.2509 6.17703 19.1783 6.34682 19.0492 6.472C18.9202 6.59718 18.7451 6.66751 18.5625 6.66751C18.3799 6.66751 18.2048 6.59718 18.0758 6.472L15.8125 4.276L13.5492 6.472C13.4202 6.59718 13.2451 6.66751 13.0625 6.66751C12.8799 6.66751 12.7048 6.59718 12.5758 6.472C12.4467 6.34682 12.3741 6.17703 12.3741 6C12.3741 5.82297 12.4467 5.65318 12.5758 5.528L15.3258 2.86133C15.3896 2.79925 15.4655 2.74999 15.549 2.71638C15.6325 2.68277 15.7221 2.66548 15.8125 2.66548C15.9029 2.66548 15.9925 2.68277 16.076 2.71638C16.1595 2.74999 16.2354 2.79925 16.2992 2.86133L19.0492 5.528Z"
                  fill="#616161"
                />
              </svg>
            </Space>
          </Radio>
        </Space>
      </Radio.Group>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        className="position-absolute"
        style={{ top: "8px", right: "8px", cursor: "pointer" }}
        onClick={() => setOpenDropdown(false)}
      >
        <path
          d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
          fill="#616161"
        />
      </svg>
    </div>
  );
};
