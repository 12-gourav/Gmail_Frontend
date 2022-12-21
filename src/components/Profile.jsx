import React, { useState } from "react";
import { Avatar, Col, Divider, Drawer, List, Row, Image } from "antd";
import { useSelector } from "react-redux";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const Profile = () => {
  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar src={user?.image} onClick={showDrawer} />

      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <Image
              width={100}
              height={100}
              src={user?.image}
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
        <br></br>
        <Row className="text-dark" style={{ fontWeight: "bolder" }}>
          <Col span={12}>
            <DescriptionItem
              title="Full Name"
              content={<p style={{ color: "#1890ff" }}>{user?.name}</p>}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Account"
              content={<p style={{ color: "#1890ff" }}>{user?.account}</p>}
            />
          </Col>
        </Row>
        <br></br>
        <Row className="text-dark" style={{ fontWeight: "bolder" }}>
          <Col span={12}>
            <DescriptionItem
              title="City"
              content={<p style={{ color: "#1890ff" }}>{user?.city}</p>}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Country"
              content={<p style={{ color: "#1890ff" }}>{user?.country}</p>}
            />
          </Col>
        </Row>
        <br></br>
        <Row className="text-dark" style={{ fontWeight: "bolder" }}>
          <Col span={12}>
            <DescriptionItem
              title="Birthday"
              content={<p style={{ color: "#1890ff" }}>{user?.dob}</p>}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Website"
              content={<p style={{ color: "#1890ff" }}>{user?.website}</p>}
            />
          </Col>
        </Row>
        <Row className="text-dark" style={{ fontWeight: "bolder" }}>
          <Col span={24}>
            <DescriptionItem
              title="Bio"
              content={<p style={{ color: "#1890ff" }}>{user?.bio}</p>}
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Home</p>
        <Row className="text-dark" style={{ fontWeight: "bolder" }}>
          <Col span={24}>
            <DescriptionItem
              title="Address"
              content={<p style={{ color: "#1890ff" }}>{user?.address}</p>}
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row className="text-blue" style={{ fontWeight: "bolder" }}>
          <Col span={12}>
            <DescriptionItem
              title="Email"
              content={<p style={{ color: "#1890ff" }}>{user?.account}</p>}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Phone Number"
              content={<p style={{ color: "#1890ff" }}>{user?.phone}</p>}
            />
          </Col>
        </Row>
        <Row className="text-primary" style={{ fontWeight: "bolder" }}>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default Profile;
