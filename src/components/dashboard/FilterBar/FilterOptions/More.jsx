import React from "react";
import { Popover } from "antd";
import { MoreIcon } from "@/components/Icons";
const More = () => {
  const [openMore, setOpenMore] = React.useState(false);

  const open = () => {
    setOpenMore(!openMore);
  };
  return (
    <Popover
      placement="bottom"
      open={openMore}
      content={<div>helo</div>}
      trigger="click"
      arrow={false}
    >
      <div onClick={open} className="d-flex align-items-center gap-1">
        <MoreIcon />
        <p className="ui-text-underline">More</p>
      </div>
    </Popover>
  );
};
export default More;
