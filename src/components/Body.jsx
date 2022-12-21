import React, { useState } from "react";
import img from "../assets/react.svg";
import { Tooltip, Popover } from "antd";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import img1 from "../assets/ct2.svg";

const Body = () => {
  const { msg } = useSelector((state) => state.user);
  const content = (
    <div>
      <p className="text-primary" style={{ fontWeight: "bold" }}>
        To:
        <span style={{ fontWeight: "bolder", marginLeft: "0.5rem" }}>
          {msg?.sender}
        </span>
      </p>
      <p className="text-primary" style={{ fontWeight: "bold" }}>
        From:
        <span style={{ fontWeight: "bolder", marginLeft: "0.5rem" }}>
          {msg?.reciver}
        </span>
      </p>
    </div>
  );
  return (
    <>
      {msg ? (
        <>
          <div className="top">
            <Popover content={content} title="FlowMail">
              <div className="name">
                <img src={msg?.senderImage} style={{ objectFit: "cover" }} />
                <div>
                  <h5 style={{ marginBottom: "0.5rem" }}>{msg?.reciver}</h5>
                  <h6>{msg?.sender}</h6>
                </div>
              </div>
            </Popover>

            <p>{msg?.createdAt}</p>
          </div>

          <div className="msg-body">
            <b>{msg?.subject}</b>
            <br></br>
            <ReactQuill value={msg?.message} readOnly={true} theme="bubble" />

            <br></br>
            <br></br>
            <b style={{ color: "gray" }}>Attachements:-</b>
            <div className="attach">
              {msg?.image.map((img, i) => (
                <Tooltip title={img.public_id} key={i}>
                  <div className="a-box">
                    <div className="trap">
                      <img
                        src={img.url}
                        style={{
                          width: "100px",
                          objectFit: "cover",
                          height: "100%",
                        }}
                      />
                      {/* <FileImageOutlined /> */}
                    </div>
                    <span>{img.public_id}</span>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <img
            src={img1}
            alt="img"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      )}
    </>
  );
};

export default Body;
