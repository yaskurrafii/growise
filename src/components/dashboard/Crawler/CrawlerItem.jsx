import { CrawlerIcon, DocumentIcon, MoreIcon } from "@/components/Icons";
import { Button, Checkbox, Space } from "antd";
import { Link } from "react-router-dom";

export const CrawlerItem = ({ data }) => {
  return (
    <div className="crawler-item__container">
      <Space direction="horizontal" size="middle" align="start">
        <Checkbox />
        <Space direction="vertical" size="large" align="start">
          <h5 className="ui-text--black">{data.name}</h5>
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
              {data.dataField.map((value, index) => {
                return (
                  <div key={index} className="ui-outline-container">
                    {value.name}
                  </div>
                );
              })}
            </Space>
          </div>
        </Space>
      </Space>
      <div className="d-flex flex-column justify-content-between">
        <Space direction="vertical" size="middle" align="end">
          <Button
            className="ui-btn-outline-yellow align-items-center d-flex gap-2"
            type="default"
          >
            Scrape
            <CrawlerIcon className="ui-btn-icon-scraper" color={"#F7CD47"} />
          </Button>
          <Space size="middle" direction="horizontal">
            <div role="button" className="d-flex align-items-center gap-1">
              <DocumentIcon />
              <p className="ui-text-underline-bold">Check results</p>
            </div>
            <div role="button" className="d-flex align-items-center gap-1">
              <MoreIcon />
              <p className="ui-text-underline-bold">More</p>
            </div>
          </Space>
        </Space>
        <p>{data.timestamp}</p>
      </div>
    </div>
  );
};
