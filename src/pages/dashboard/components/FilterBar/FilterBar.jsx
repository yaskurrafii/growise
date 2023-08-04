import { Checkbox } from "antd";
import React, { useState } from "react";

export const FilterBar = () => {
  const [checkAll, setCheckAll] = useState(false);
  return (
    <div className="content-wrapper__filter">
      <div className="content-wrapper__filter-left">
        <Checkbox checked={checkAll}>Select All</Checkbox>
        <div>Add Tag</div>
        <div>More</div>
      </div>
      <div className="content-wrapper__filter-right">
        <div>Filter</div>
        <div>Order</div>
        <div>Search</div>
      </div>
    </div>
  );
};
