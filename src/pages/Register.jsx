import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./register.css";
import { toast } from "react-toastify";
import { register } from "../redux/actions/action";
import FileAssetsUploader from "../components/FileAssetsUploader";

const { Option } = Select;

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [dis, setDis] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const onChange = (date, dateString) => {
    console.log(dateString);
    setDob(dateString);
  };

  const handleSubmit = () => {
    try {
      setLoading(true);
      register(
        name,
        age,
        gender,
        dob,
        account,
        password,
        type,
        dis,
        image,
        city,
        country,
        phone,
        website,
        address
      )
        .then((res) => {
          toast.success(res?.data.message);
          console.log(res);
          setLoading(false);
          setName("");
          setAccount("");
          setAge("");
          setDis("");
          setDob("");
          setGender("");
          setPassword("");
          setType("");
          Navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          toast.error(err);
        });
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  return (
    <section className="register">
      <h4 className="text-primary">Create Account</h4>
      <div className="container white">
        <Form
          layout="vertical"
          hideRequiredMark
          style={{ width: "100%" }}
          className="whites"
        >
          <div className="row">
            <div className="col-sm-6">
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Please enter user name"
                />
              </Form.Item>
            </div>
            <div className="col-sm-6">
              <Form.Item
                name="Age"
                label="Age"
                rules={[
                  {
                    required: true,
                    message: "Please enter Age",
                  },
                ]}
              >
                <Input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Please enter user age"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Item
                name="Gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select your Gender",
                  },
                ]}
              >
                <Select
                  placeholder="Please select gender"
                  value={gender}
                  onChange={(e) => setGender(e)}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-sm-6">
              <Form.Item
                name="Date of Birth"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: "Please select your Birth Date",
                  },
                ]}
              >
                <DatePicker onChange={onChange} style={{ width: "100%" }} />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Item
                name="account"
                label="Account"
                rules={[
                  {
                    required: true,
                    message: "Please enter account name",
                  },
                ]}
              >
                <Input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="Please enter account name"
                />
              </Form.Item>
            </div>
            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <Form.Item
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: "Please enter city name",
                  },
                ]}
              >
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Please enter city name"
                />
              </Form.Item>
            </div>
            <div className="col-sm-6">
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Country",
                  },
                ]}
              >
                <Input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Please enter your Country"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter Phone number",
                  },
                ]}
              >
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Please enter phone Number"
                />
              </Form.Item>
            </div>
            <div className="col-sm-6">
              <Form.Item
                name="website"
                label="Website"
                rules={[
                  {
                    required: true,
                    message: "Please enter your website",
                  },
                ]}
              >
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Please enter your Country"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Address",
                  },
                ]}
              >
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Please enter address name"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Form.Item
                name="type"
                label="Type of User"
                rules={[
                  {
                    required: true,
                    message: "Please select your User Category",
                  },
                ]}
              >
                <Select
                  placeholder="Please select your category"
                  value={type}
                  onChange={(e) => setType(e)}
                >
                  <Option value="Student">Student Account</Option>
                  <Option value="Teacher">Teacher Account</Option>
                  <Option value="Bussiness">Bussiness Account</Option>
                  <Option value="Temprory">Temprory Account</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  value={dis}
                  onChange={(e) => setDis(e.target.value)}
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </div>
          </div>
          <FileAssetsUploader image={image} setImage={setImage} />
          <div className="row">
            <div className="col-sm-12 d-flex" style={{}}>
              <center>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary bg-primary"
                  style={{}}
                  disabled={
                    !name ||
                    !age ||
                    !gender ||
                    !account ||
                    !password ||
                    !type ||
                    !dis ||
                    !dob
                  }
                >
                  Create Account
                </button>
              </center>
            </div>
            <div
              className="col-sm-12 "
              style={{
                marginTop: "0.5rem",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              <Link to="/login" style={{ fontSize: "1rem" }}>
                Already have an Account ?
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Register;
