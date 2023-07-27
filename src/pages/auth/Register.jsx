import { Button, Card, Divider, Form, Input, Spin, Typography } from "antd";
import { Container } from "react-bootstrap";
import { LogoIcon } from "../dashboard/components/Navbar/Icon";
import { Link, useNavigate } from "react-router-dom";
import { RegisterApi } from "@/apis/api";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    setLoading(true);
    RegisterApi(values).then((resp) => {
      setLoading(false);
      navigate("/");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh" }}
    >
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "fit-content" }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ width: 400 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="d-flex justify-content-center mb-4">
              <LogoIcon />
            </div>
            <Form.Item
              label="Full name"
              name="fullname"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input disabled={loading} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please input your valid email!" },
              ]}
            >
              <Input disabled={loading} />
            </Form.Item>

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

            <Form.Item
              label="Repeat Password"
              name="repeatpassword"
              rules={[
                {
                  required: true,
                  message: "Please input your repeat password!",
                },
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
                {loading ? <Spin /> : "Register"}
              </Button>
            </Form.Item>

            <Divider />

            <Typography.Paragraph className="text-center">
              Already have an account? <Link to={"/login"}>Login now!</Link>
            </Typography.Paragraph>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
