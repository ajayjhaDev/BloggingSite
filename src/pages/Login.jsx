import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button, Form, Input } from "antd";

import { useDispatch } from "react-redux";

import { LoginAction } from "../store/authAsyncAction";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(LoginAction(values, Navigate));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#d2d1ff",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <p>Don't have an account ?</p>
        <Link to={"/signup"}>SignUp</Link>
      </Form>
    </div>
  );
};

export default Login;
