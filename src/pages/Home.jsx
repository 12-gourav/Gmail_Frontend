import React from "react";
import { Tabs, Tooltip } from "antd";
import "react-quill/dist/quill.snow.css";
import {
  QuestionCircleOutlined,
  SettingOutlined,
  AppstoreOutlined,
  InboxOutlined,
  StarOutlined,
  SendOutlined,
  UsergroupDeleteOutlined,
  DeleteOutlined,
  DiffOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Profile from "../components/Profile";
import { getInfo } from "../redux/actions/action";
import ContentOne from "../components/ContentOne";
import Content2 from "../components/Content2";
import { Link, useNavigate } from "react-router-dom";
import Content3 from "../components/Content3";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ContactContent from "../components/ContactContent";
import Media from "../components/Media";
import Update from "../components/Update";
import { useEffect } from "react";

const Home = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    const flag = window.confirm("Are you sure you wont to be Logout !");
    if (flag) {
      toast.success("Logout SuccessFull");
      localStorage.removeItem("token");
      dispatch({ type: "logout" });
      Navigate("/login");
    }
  };

  const items = [
    {
      label: (
        <Tooltip title="Inbox" placement="right">
          <InboxOutlined className="a" />
        </Tooltip>
      ),
      key: "item-1",
      children: <ContentOne />,
    }, // remember to pass the key prop
    {
      label: (
        <Tooltip title="Sent Messages" placement="right">
          <StarOutlined className="a" />
        </Tooltip>
      ),
      key: "item-2",
      children: <Content3 />,
    },
    {
      label: (
        <Tooltip title="SentBox" placement="right">
          <SendOutlined className="a" />
        </Tooltip>
      ),
      key: "item-3",
      children: <Content2 />,
    }, // remember to pass the key prop
    {
      label: (
        <Tooltip title="Contacts" placement="right">
          {" "}
          <UsergroupDeleteOutlined className="a" />
        </Tooltip>
      ),
      key: "item-4",
      children: <ContactContent />,
    },
    {
      label: (
        <Tooltip title="Updates" placement="right">
          <InfoCircleOutlined className="a" />
        </Tooltip>
      ),
      key: "item-5",
      children: <Update />,
    }, // remember to pass the key prop
    {
      label: (
        <Tooltip title="Media Files " placement="right">
          {" "}
          <DiffOutlined className="a" />
        </Tooltip>
      ),
      key: "item-6",
      children: <Media />,
    },
    {
      label: (
        <Tooltip title="Logout " placement="right">
          <LogoutOutlined className="a" onClick={handleLogout} />
        </Tooltip>
      ),
      key: "item-7",
      children: "Content 7",
    },
  ];

  useEffect(() => {
    const authtoken = localStorage.getItem("token");
    getInfo(authtoken)
      .then((res) => {
        dispatch({ type: "load", payload: res?.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header>
        <div className="dots">
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
        </div>
        <div className="dots-sec">
          <h5>
            <Link to="/login">Flow Mail</Link>FlowMail
          </h5>
          <div className="menue">
            <Tooltip title="Any Query About FlowMail ? ">
              {" "}
              <QuestionCircleOutlined className="a" />
            </Tooltip>
            <Tooltip title="Settings ">
              <SettingOutlined className="a" />
            </Tooltip>
            <Tooltip title="Apps ">
              <AppstoreOutlined className="a" />
            </Tooltip>
            <span className="vr"></span>
            <Tooltip title="Your Profile">
              <Profile />
            </Tooltip>
          </div>
        </div>
      </header>
      <section className="wrap">
        <div className="one pt-2" style={{}}>
          <Tabs
            defaultActiveKey="1"
            tabPosition={"left"}
            style={{
              height: 550,
            }}
            items={items}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
