import { Checkbox, Popover, Space, Button, Form } from "antd";
import { FilterIcon } from "@/components/Icons";
import { useState } from "react";

const categories = [
  "分類名稱1",
  "分類名稱2",
  "分類名稱3",
  "分類名稱4",
  "分類名稱5",
  "分類名稱6",
];

const app = [
  "Google文件",
  "Google試算集",
  "Google mail",
  "Hubspot",
  "Pipedrive",
  "Salesforce",
  "Intercom",
  "Facebook",
];

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };
  const onFinish = (values) => {
    console.log(values);
    setOpenFilter(false);
  };
  return (
    <>
      <Popover
        rootClassName="filter-popover"
        style={{position: "absolute", top:20}}
        arrow={false}
        open={openFilter}
        content={
          <div>
            <Form name="filter" onFinish={onFinish} style={{ maxWidth: 500 }}>
              <Space direction="horizontal" size="middle">
                <Form.Item name="categories">
                  <Checkbox.Group>
                    <div className="d-flex flex-column">
                      <h6 className="ui-text--black">Categories</h6>
                      <div className="d-flex flex-column">
                        {categories.map((value) => {
                          return <Checkbox value={value}>{value}</Checkbox>;
                        })}
                      </div>
                    </div>
                  </Checkbox.Group>
                </Form.Item>
                <Form.Item name="app">
                  <Checkbox.Group>
                    <div className="d-flex flex-column">
                      <h6 className="ui-text--black">App</h6>
                      <div className="d-flex flex-column">
                        {app.map((value) => {
                          return <Checkbox value={value}>{value}</Checkbox>;
                        })}
                      </div>
                    </div>
                  </Checkbox.Group>
                </Form.Item>
              </Space>
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <Button htmlType="submit" type="default">
                  Confirm
                </Button>
                <Button htmlType="reset" className="ui-text-underline">
                  Clear All
                </Button>
              </div>
            </Form>
          </div>
        }
      >
        <div
          role="button"
          onClick={toggleFilter}
          className="d-flex align-items-center gap-1"
        >
          <FilterIcon />
          <p className="ui-text-underline">Filter</p>
        </div>
      </Popover>
    </>
  );
};
export default Filter;
