import { Avatar } from "antd";
import React from "react";
import img from "../assets/react.svg";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Card = ({ data, setMsg }) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const handleStar = () => {
    localStorage.setItem("saved", "kingset");
    setState(true);
  };

  return (
    <>
      <div
        className="cards"
        onClick={() => dispatch({ type: "message", payload: data })}
      >
        <img
          className="avtar"
          src={data?.senderImage}
          style={{ objectFit: "cover" }}
        />
        <div className="content">
          <div className="head">
            <p>{data.sender}</p>
            <span>{data.createdAt.substring(0, 10)}</span>
          </div>
          <div className="sub">
            <h4>{data.subject.substring(0, 50)}</h4>
          </div>
          <div className="message">
            <ReactQuill
              value={data.message.substring(0, 200)}
              readOnly={true}
              theme="bubble"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
