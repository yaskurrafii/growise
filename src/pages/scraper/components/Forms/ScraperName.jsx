import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { crawlerData } from "@/stores/crawler";
import { Button, Form, Input } from "antd";

export const ScraperName = ({ setFormStep }) => {
  const [form] = Form.useForm();

  const [data, setData] = useAtom(crawlerData);

  const onSubmit = (values) => {
    console.log(values);
    data.name = values.name;
    setData({ ...data });
    setFormStep(3);
  };

  return (
    <div className="build__scraper-name">
      <h1>Build a web crawler on this page</h1>
      <Form form={form} id="scraper-form-name" onFinish={onSubmit}>
        <div className="build__scraper-name-input d-flex justify-center flex-column gap-2">
          <div>
            <h2>Web Crawler Name</h2>
            <h3>You can change the crawler name later and at any time</h3>
          </div>
          <Form.Item
            name="name"
            type="text"
            id="name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="build__scraper-name-navigation">
          <Button
            className="ui-btn-outline-white"
            onClick={() => setFormStep(1)}
            type="default"
            info
            ghost
          >
            Previous
          </Button>
          <Button
            htmlType="submit"
            className="ui-btn-outline-white"
            type="default"
            info
            ghost
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
