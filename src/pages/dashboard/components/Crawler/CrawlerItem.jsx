import { Button, Checkbox, Space } from "antd";
import { CrawlerIcon } from "../Navbar/Icon";
import { Link } from "react-router-dom";

export const CrawlerItem = ({ data }) => {
  return (
    <div className="crawler-item__container">
      <Space direction="horizontal" size="middle" align="start">
        <Checkbox />
        <Space direction="vertical" size="large" align="start">
          <h5>{data.name}</h5>
          <div className="d-flex gap-3">
            <Space align="start" direction="vertical">
              <p>Page</p>
              <div className="ui-outline-container">{data.page}</div>
            </Space>
            <div className="d-flex flex-column gap-2">
              <Space align="start" direction="vertical">
                <p>URL</p>
                <div className="ui-outline-container">
                  <Link to={data.url}>{data.url}</Link>
                </div>
              </Space>
            </div>
          </div>
          <div className="d-flex gap-2 flex-column">
            <div className="data-field d-flex gap-2 align-items-center">
              <p>Data field</p>
              <a href="">Manage the field names</a>
            </div>
            <Space direction="horizontal" size="small">
              {data.dataField.map((value) => {
                return <div className="ui-outline-container">{value.name}</div>;
              })}
            </Space>
          </div>
        </Space>
      </Space>
      <div className="d-flex flex-column justify-content-between">
        <Space direction="vertical" align="end">
          <Button type="default">Scrape</Button>
          <Space direction="horizontal">
            <Button type="text">Check results</Button>
            <Button type="text">More</Button>
          </Space>
        </Space>
        <p>{data.timestamp}</p>
      </div>
    </div>
  );
};
