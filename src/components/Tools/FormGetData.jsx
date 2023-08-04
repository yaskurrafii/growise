import {
  Button,
  Form,
  Input,
  Radio,
  Space,
  Popover,
  ConfigProvider,
} from "antd";
import theme from "@/lib/theme";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { hoverActive } from "@/stores/crawler";

export const FormGetData = ({ content, link }) => {
  const setHoverActive = useSetAtom(hoverActive);
  const [form] = Form.useForm();
  const [openForm, setOpenForm] = useState(true);
  const onFinish = (values) => {
    setOpenForm(false);
    setHoverActive(true);
  };

  return (
    <Popover
      destroyTooltipOnHide={true}
      rootClassName="form-get-data"
      width={241}
      height={223}
      zIndex={100000}
      arrow={false}
      open={openForm}
      content={
        <ConfigProvider theme={theme}>
          <Form onFinish={onFinish} form={form}>
            <Form.Item name="data">
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={content} id="text" checked={true}>
                    Get Text <span className="value">{content}</span>
                  </Radio>
                  <Radio value={link} id="link">
                    Get Link <span className="value">{link}</span>
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="name">
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Text Field 1"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Get Data
            </Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              onClick={() => setOpenForm(false)}
              className="position-absolute"
              style={{ top: "8px", right: "8px", cursor: "pointer" }}
            >
              <path
                d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
                fill="#616161"
              />
            </svg>
          </Form>
        </ConfigProvider>
      }
    ></Popover>
  );
};
