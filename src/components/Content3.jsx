import React, { useState } from "react";
import Inbox2 from "./Inbox2";
import Body from "./Body";
import {
  RotateLeftOutlined,
  RotateRightOutlined,
  PrinterOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import Content2 from "./Content2";
import Fav from "./Fav";

const Content3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [msg, setMsg] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(msg);
  return (
    <>
      <div className="containers">
        <Modal
          title="Flow Mail"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <Content2 />
        </Modal>

        <div className="first">
          <Inbox2 setMsg={setMsg} />
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
                <DeleteOutlined /> Delete
              </span>
            </div>
          </div>
        </div>
        <div className="last">
          <Fav />
        </div>
      </div>
    </>
  );
};

export default Content3;
