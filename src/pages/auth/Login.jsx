import { Button, Card, Divider, Form, Input, Spin, Typography } from "antd";
import { Container } from "react-bootstrap";
import { LogoIcon } from "@/components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginApi } from "@/apis/api";
import { useSetAtom, useAtom } from "jotai";
import { crawlerData } from "@/stores/crawler";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setCrawlerData] = useAtom(crawlerData);

  const onFinish = (values) => {
    setLoading(true);
    LoginApi(values).then((resp) => {
      if (resp.data["description"]) {
        setCrawlerData((prevdata) => ({
          ...prevdata,
          account: resp.data["id"],
        }));
        setLoading(false);
        navigate("/dashboard");
      }
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Container className="d-flex justify-content-center align-items-center">
        <Card style={{ width: "fit-content", height: "fit-content" }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="d-flex justify-content-center mb-4">
              <LogoIcon />
            </div>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input disabled={loading} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password disabled={loading} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading ? <Spin /> : "Login"}
              </Button>
            </Form.Item>

            <Divider />

            <Typography.Paragraph className="text-center">
              Don&apos;t have an account?{" "}
              <Link to={"/register"}>Register now!</Link>
            </Typography.Paragraph>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
