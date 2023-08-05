import { Cascader, Checkbox, Input } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { AddTag, More, Filter } from "./FilterOptions";

const FilterBar = () => {
  const [checkAll, setCheckAll] = useState(false);
  return (
    <div className="content-wrapper__filter">
      <div className="content-wrapper__filter-left">
        <Checkbox checked={checkAll}>
          <p>Select All</p>
        </Checkbox>
        <AddTag />
        <More />
      </div>
      <div className="content-wrapper__filter-right">
        <p>Order</p>
        <Filter />
        <Input
          style={{ borderRadius: 20 }}
          placeholder="Search"
          addonAfter={<SearchOutlined />}
          addonBefore={
            <Cascader
              style={{ width: 65 }}
              placeholder={
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8345 0.00310174C6.34964 -0.121318 2.67537 3.51353 2.67537 8.00154H1.09816C0.701658 8.00154 0.507812 8.48144 0.78977 8.75694L3.2481 11.2453C3.42432 11.4231 3.69747 11.4231 3.87369 11.2453L6.33201 8.75694C6.3929 8.69429 6.43404 8.61487 6.45025 8.52867C6.46645 8.44248 6.457 8.35337 6.42307 8.27259C6.38915 8.1918 6.33228 8.12296 6.25963 8.07472C6.18698 8.02648 6.10179 8.00102 6.01481 8.00154H4.43761C4.43761 4.53555 7.23957 1.7361 10.6936 1.78053C13.9713 1.82497 16.7292 4.60664 16.7733 7.91266C16.8173 11.3875 14.0418 14.2225 10.6054 14.2225C9.18684 14.2225 7.87398 13.7337 6.83425 12.9072C6.66549 12.7731 6.45374 12.7063 6.23929 12.7194C6.02484 12.7325 5.82265 12.8247 5.67118 12.9783C5.3011 13.3516 5.32754 13.9826 5.74166 14.3025C7.12601 15.4067 8.84054 16.0051 10.6054 16C15.0551 16 18.6589 12.294 18.5355 7.77047C18.421 3.6024 14.967 0.118635 10.8345 0.00310174ZM10.3852 4.44668C10.0239 4.44668 9.72433 4.74884 9.72433 5.11321V8.38368C9.72433 8.69473 9.89174 8.98801 10.1561 9.14798L12.9052 10.7921C13.2224 10.9787 13.6277 10.8721 13.8127 10.561C13.9978 10.2411 13.892 9.83229 13.5836 9.64566L11.046 8.12596V5.10432C11.046 4.74884 10.7464 4.44668 10.3852 4.44668Z"
                    fill="#616161"
                  />
                </svg>
              }
            />
          }
        />
      </div>
    </div>
  );
};
export default FilterBar;
