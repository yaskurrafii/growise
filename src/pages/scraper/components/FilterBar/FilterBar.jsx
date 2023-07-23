import React from 'react'

export const FilterBar = () => {
  return (
    <div className='content-wrapper__filter'>
      <div className="content-wrapper__filter-left">
        <div>Select All</div>
        <div>Add Category</div>
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
