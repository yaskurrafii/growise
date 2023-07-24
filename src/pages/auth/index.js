import { Button, Card, Checkbox, Divider, Form, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

export default function index() {
  const onFinish = (values) => {
    console.log("Success:", values);
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
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="d-flex justify-content-center mb-4">
              <Image
                width={210}
                height={48}
                src={"/img/logo.png"}
                alt="Growise Logo"
              />
            </div>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Divider />

            <Typography.Paragraph className="text-center">
              Don&apos;t have an account? <Link href={"/"}>Register now!</Link>
            </Typography.Paragraph>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
