import { Avatar, Tooltip } from "antd";
import React, { useState } from "react";
import { PlusOutlined, HeartFilled } from "@ant-design/icons";
import img1 from "../assets/ct.svg";
import img2 from "../assets/ct.svg";
import img3 from "../assets/ct2.svg";
import img4 from "../assets/ct3.svg";
import img5 from "../assets/ct4.svg";
import img6 from "../assets/ct5.svg";
import img7 from "../assets/ct6.svg";
import img8 from "../assets/ct7.svg";
import { Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { searchFriend } from "../redux/actions/action";
import { toast } from "react-toastify";
const Fav = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleSearch = () => {
    if (!name) return toast.error("Plz Enter Your Friend Address");
    setLoading(true);
    const token = localStorage.getItem("token");
    searchFriend(name, token)
      .then((res) => {
        if (res?.data.user) {
          toast.success(res?.data.message);
          setState(res?.data.user);
          setLoading(false);
        } else {
          toast.error(res?.data.error);
          setLoading(false);
        }
        setName("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="row">
          <div className="col-sm-12">
            <div
              className="form-group"
              style={{ display: "flex", marginRight: " 2rem" }}
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
              <button
                className="btn btn-sm bg-light from-control"
                style={{ width: "50px" }}
                onClick={handleSearch}
              >
                <SearchOutlined />
              </button>
            </div>
          </div>
          <div className="col-sm-12">
            <div
              className="card"
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className="text-primary" style={{ fontWeight: "bolder" }}>
                {state.account}
              </p>
              <button
                className=" btn bg-primary"
                style={{
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HeartFilled />
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="list">
        <Tooltip title="Add Favrate" placement="left">
          <span onClick={showModal}>
            <PlusOutlined />
          </span>
        </Tooltip>
        <br></br>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img1} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img2} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img3} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img4} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img5} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img6} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img7} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img8} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img4} />
        </Tooltip>
        <Tooltip title="Add Favrate" placement="left">
          <img className="mr-top" src={img5} />
        </Tooltip>
      </div>
    </>
  );
};

export default Fav;
