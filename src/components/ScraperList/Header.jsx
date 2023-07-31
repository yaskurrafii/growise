import { Select } from "antd";

export const Header = ({ isOpen, setOpenTable }) => {
  const toggleTable = () => {
    if (!isOpen) {
      setOpenTable(true);
    } else setOpenTable(false);
  };
  return (
    <div className="scraper-list__header d-flex rounded-top-3 px-4 py-3 justify-content-between overflow-hidden">
      <div className="scraper-list__header-left d-flex align-items-center gap-3">
        <div className="scraper-list__header__name">
          Extract Data Template-kkday Global Paradise List
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M9.2295 12.7502C9.26492 13.246 9.37825 13.7277 9.56242 14.1668H4.60409C3.54159 14.1668 2.61367 13.8127 1.84867 13.0547C1.09075 12.311 0.708252 11.3972 0.708252 10.3277C0.708252 9.40683 0.984502 8.58516 1.537 7.86266C2.0895 7.14016 2.83325 6.67975 3.71867 6.48141C4.01617 5.39766 4.60409 4.51933 5.4895 3.84641C6.37492 3.1735 7.38075 2.8335 8.49992 2.8335C9.88117 2.8335 11.0499 3.31516 12.0133 4.2785C12.9766 5.24183 13.4583 6.41058 13.4583 7.79183H13.5291C13.0049 7.84141 12.502 7.95475 12.0416 8.146V7.79183C12.0416 6.81433 11.6874 5.9785 11.0074 5.28433C10.3133 4.60433 9.47742 4.25016 8.49992 4.25016C7.52242 4.25016 6.68658 4.60433 5.99242 5.28433C5.31242 5.9785 4.95825 6.81433 4.95825 7.79183H4.60409C3.917 7.79183 3.33617 8.03266 2.8545 8.52141C2.36575 9.00308 2.12492 9.58391 2.12492 10.271C2.12492 10.9581 2.36575 11.5389 2.8545 12.0418C3.33617 12.5093 3.917 12.7502 4.60409 12.7502H9.2295ZM13.4583 9.56266V8.50016L11.8645 10.0939L13.4583 11.6877V10.6252C13.9279 10.6252 14.3783 10.8117 14.7104 11.1438C15.0425 11.4759 15.2291 11.9263 15.2291 12.396C15.2291 12.6793 15.1653 12.9485 15.0449 13.1893L15.817 13.9614C16.1145 13.5152 16.2916 12.9768 16.2916 12.396C16.2916 10.8306 15.0237 9.56266 13.4583 9.56266ZM13.4583 14.1668C12.9886 14.1668 12.5382 13.9803 12.2061 13.6482C11.874 13.3161 11.6874 12.8657 11.6874 12.396C11.6874 12.1127 11.7512 11.8435 11.8716 11.6027L11.0995 10.8306C10.802 11.2768 10.6249 11.8152 10.6249 12.396C10.6249 13.9614 11.8928 15.2293 13.4583 15.2293V16.2918L15.052 14.6981L13.4583 13.1043V14.1668Z"
            fill="white"
          />
        </svg>
        <div className="scraper-list__header--status">Saving...</div>
      </div>
      <div className="scraper-list__header__right d-flex align-items-center gap-3">
        <div className="scraper-list__header__pages">
          單頁資料筆數: 50 筆 / 頁數: 1 頁(無換頁) / 總項目數: 50 筆
        </div>
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          options={[
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        />
        <button onClick={toggleTable}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M3.37499 8.99999C3.37499 9.61874 3.88124 10.125 4.49999 10.125H8.99999C9.61874 10.125 10.125 9.61874 10.125 8.99999V4.49999C10.125 3.88124 9.61874 3.37499 8.99999 3.37499C8.38124 3.37499 7.87499 3.88124 7.87499 4.49999V6.28874L5.19749 3.61124C5.09333 3.50708 4.96968 3.42446 4.8336 3.3681C4.69751 3.31173 4.55166 3.28271 4.40436 3.28271C4.25707 3.28271 4.11121 3.31173 3.97513 3.3681C3.83904 3.42446 3.71539 3.50708 3.61124 3.61124C3.50708 3.71539 3.42446 3.83904 3.3681 3.97513C3.31173 4.11121 3.28271 4.25707 3.28271 4.40436C3.28271 4.55166 3.31173 4.69751 3.3681 4.8336C3.42446 4.96968 3.50708 5.09333 3.61124 5.19749L6.28874 7.87499H4.49999C3.88124 7.87499 3.37499 8.38124 3.37499 8.99999ZM22.5 7.87499H20.7112L23.3887 5.19749C23.5991 4.98714 23.7173 4.70184 23.7173 4.40436C23.7173 4.10688 23.5991 3.82159 23.3887 3.61124C23.1784 3.40089 22.8931 3.28271 22.5956 3.28271C22.2981 3.28271 22.0128 3.40089 21.8025 3.61124L19.125 6.28874V4.49999C19.125 3.88124 18.6187 3.37499 18 3.37499C17.3812 3.37499 16.875 3.88124 16.875 4.49999V8.99999C16.875 9.61874 17.3812 10.125 18 10.125H22.5C23.1187 10.125 23.625 9.61874 23.625 8.99999C23.625 8.38124 23.1187 7.87499 22.5 7.87499ZM4.49999 19.125H6.28874L3.61124 21.8025C3.40089 22.0128 3.28271 22.2981 3.28271 22.5956C3.28271 22.8931 3.40089 23.1784 3.61124 23.3887C3.82159 23.5991 4.10688 23.7173 4.40436 23.7173C4.70184 23.7173 4.98714 23.5991 5.19749 23.3887L7.87499 20.7112V22.5C7.87499 23.1187 8.38124 23.625 8.99999 23.625C9.61874 23.625 10.125 23.1187 10.125 22.5V18C10.125 17.3812 9.61874 16.875 8.99999 16.875H4.49999C3.88124 16.875 3.37499 17.3812 3.37499 18C3.37499 18.6187 3.88124 19.125 4.49999 19.125ZM23.625 18C23.625 17.3812 23.1187 16.875 22.5 16.875H18C17.3812 16.875 16.875 17.3812 16.875 18V22.5C16.875 23.1187 17.3812 23.625 18 23.625C18.6187 23.625 19.125 23.1187 19.125 22.5V20.7112L21.8025 23.3887C22.0128 23.5991 22.2981 23.7173 22.5956 23.7173C22.8931 23.7173 23.1784 23.5991 23.3887 23.3887C23.5991 23.1784 23.7173 22.8931 23.7173 22.5956C23.7173 22.2981 23.5991 22.0128 23.3887 21.8025L20.7112 19.125H22.5C23.1187 19.125 23.625 18.6187 23.625 18Z"
              fill="white"
            />
          </svg>
        </button>
        <button>
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
      </div>
    </div>
  );
};