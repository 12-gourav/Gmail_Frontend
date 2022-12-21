import React, { useState } from "react";
import Fav from "./Fav";
import Inbox from "./Inbox";
import Body from "./Body";
import Content2 from "./Content2";
import { Modal } from "antd";
import {
  RotateLeftOutlined,
  RotateRightOutlined,
  PrinterOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import ContentZ from "./ContentZ";

const ContentOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    console.log(id);
  };

  return (
    <div className="containers">
      <Modal
        title="Flow Mail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <ContentZ />
      </Modal>

      <div className="first">
        <Inbox />
      </div>
      <div className="body">
        <Body />
        <div className="last-body">
          <div>
            <span onClick={showModal}>
              <RotateLeftOutlined /> Reply
            </span>
            <span>
              <RotateRightOutlined /> Forward
            </span>
            <span>
              <PrinterOutlined /> Print
            </span>
          </div>
          <div>
            <span>
              <StarOutlined /> Starred
            </span>
            <span>
              <DeleteOutlined onClick={handleDelete} /> Delete
            </span>
          </div>
        </div>
      </div>
      <div className="last">
        <Fav />
      </div>
    </div>
  );
};

export default ContentOne;
