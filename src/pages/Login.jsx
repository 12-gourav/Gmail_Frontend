import React, { useState } from "react";
import "./Login.css";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/action";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const { valid } = useSelector((state) => state.user);

  const Navigate = useNavigate();

  // useEffect(() => {
  //   if (valid) {
  //     Navigate("/");
  //     toast.error("Already Login !");
  //   }
  // }, [valid]);

  const handleSubmit = () => {
    setLoading(true);
    login(email, password)
      .then((res) => {
        if (!res) {
          return toast.error("User and password Undefined");
        }
        dispatch({
          type: "login",
          payload: {
            user: res?.data,
            token: res?.data.token,
          },
        });
        localStorage.setItem("token", res?.data.token);
        setLoading(false);
        Navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <section className="login">
        <div className="con">
          {loading ? (
            <h4 className="text-danger">Loading......</h4>
          ) : (
            <h4 className="text-primary" style={{ fontWeight: "bold" }}>
              Login
            </h4>
          )}
          <Form layout="vertical" hideRequiredMark>
            <div className="row">
              <div className="col-sm-12">
                <Form.Item
                  name="Email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter user email",
                    },
                  ]}
                >
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter user Email"
                  />
                </Form.Item>
              </div>
              <div className="col-sm-12">
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                >
                  <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please enter your Password"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary bg-primary"
                  style={{ width: "100%" }}
                  disabled={!email || !password}
                >
                  Login
                </button>
              </div>
              <div className="col-sm-12">
                <Link to="/register" style={{ fontSize: "1rem" }}>
                  Register Account ?
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
