import React from "react";
import { Popover } from "antd";
import { TagIcon } from "@/components/Icons";

const AddTag = () => {
  const [openAddTag, setOpenAddTag] = React.useState(false);

  const open = () => {
    setOpenAddTag(!openAddTag);
  };
  return (
    <Popover
      placement="bottom"
      open={openAddTag}
      content={<div>helo</div>}
      trigger="click"
      arrow={false}
    >
      <div onClick={open} role="button" className="d-flex align-items-center gap-1">
        <TagIcon />
        <p className="ui-text-underline">Add Tag</p>
      </div>
    </Popover>
  );
};
export default AddTag;
