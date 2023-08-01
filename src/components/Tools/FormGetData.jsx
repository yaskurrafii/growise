import { useForm } from "react-hook-form";
import { Radio, Space } from "antd";
import { hoverActive } from "@/stores/crawler";
import { useSetAtom } from "jotai";
import { unmountComponentAtNode } from "react-dom";

export const FormGetData = ({ content }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const setHoverActive = useSetAtom(hoverActive);
  const onSubmit = (values) => {
    setHoverActive(true);
  };
  return (
    <div className="scraper-tools--form-get-data overflow-hidden rounded-2">
      helo
      <form onSubmit={handleSubmit(onSubmit)}>
        <Space direction="vertical">
          <Radio.Group>
            <Space direction="vertical">
              <Radio name="data" value={"text"} id="text" {...register("data")}>
                Get Text {content}
              </Radio>
              <Radio name="data" value={"link"} id="link" {...register("data")}>
                Get Link
              </Radio>
            </Space>
          </Radio.Group>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Text Field 1"
            {...register("name")}
          />
        </Space>
        <button type="submit">Get Data</button>
      </form>
    </div>
  );
};
