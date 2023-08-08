import { useAtom } from "jotai";
import { crawlerData } from "@/stores/crawler";
import { Link } from "react-router-dom";
import { Button, Form, Radio, Space } from "antd";

export const ScraperType = ({ setFormStep }) => {
  const [form] = Form.useForm();

  const [data, setData] = useAtom(crawlerData);

  const onSubmit = (values) => {
    data.type = values.type;
    setData({ ...data });
    // setFormStep(2);
  };
  const onChange = (values) => {
    console.log(values);
  };

  const handleLabelClick = (value) => {
    const form = document.getElementById("scraper-type-form");
    const radioInput = document.getElementById(value + "-page");
    if (form && radioInput) {
      radioInput.checked = true;
      onSubmit({ type: value });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form name="data" form={form} onChange={onChange} onFinish={onFinish}>
        <h2>Create a scraper on this page</h2>

        <Form.Item>
          <Radio.Group>
            <div className="d-flex justify-content-center align-items-center gap-5">
              <Space direction="vertical" size="sm">
                <Radio.Button
                  rootClassName="scraper-form--type-single-page"
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{
                    color: "black",
                    width: 500,
                    height: 380,
                    borderRadius: 20,
                  }}
                  value={"single-page"}
                >
                  <img
                    className="single-page"
                    src="/public/img/single_page.png"
                    alt="single-page"
                  />
                  <div className="scraper-form--type-description__single d-flex justify-content-start align-items-center flex-column">
                    <h3>Single Page</h3>
                    <p>
                      Retrieve data from a single page ex: user profiles or
                      article pages
                    </p>
                  </div>
                </Radio.Button>
              </Space>
              <Space direction="vertical" size="sm">
                <Radio.Button
                  rootClassName="scraper-form--type-list-page"
                  className="d-flex flex-column justify-content-center align-items-center"
                  value={"list-page"}
                  style={{
                    color: "black",
                    width: 500,
                    height: 380,
                    borderRadius: 20,
                    gap: 10,
                  }}
                >
                  <img
                    className="list-page"
                    src="/public/img/list_page.png"
                    alt="list-page"
                  />
                  <div className="scraper-form--type-description__list d-flex justify-content-start align-items-center flex-column">
                    <h3>List</h3>
                    <p>
                      Scrape multiple items from a list, with the ability to
                      paginate ex: Scrape a list of products or configuration
                      files from a search
                    </p>
                  </div>
                </Radio.Button>
              </Space>
            </div>
          </Radio.Group>
        </Form.Item>
        <Link to={`/dashboard`}>
          <Button className="ui-btn-outline-white" type="default" ghost>
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
};
