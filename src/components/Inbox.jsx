import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Card from "./Card";
import { useEffect } from "react";
import { getMessage2 } from "../redux/actions/action";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import img from "../assets/ct6.svg";

const Inbox = () => {
  const [state, setState] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    getMessage2(token)
      .then((res) => {
        setState(res?.data?.list);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const searched = (keyword) => (data) =>
    data.subject.toLowerCase().includes(keyword);

  return (
    <>
      <div className="inbox" style={{ paddingTop: "1rem" }}>
        {loading ? (
          <h4 className="text-danger">Loading....</h4>
        ) : (
          <h4>Inbox</h4>
        )}
        <div className="search">
          <div className="search-box">
            <SearchOutlined />
            <input
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="msg">
          {state == "" ? (
            <center style={{ paddingTop: "1.5rem" }}>
              <img
                src={img}
                alt="img"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
              <p>No Messages available</p>
            </center>
          ) : (
            <>
              {loading ? (
                <>
                  <br></br>
                  <Skeleton active={true} />
                  <br></br>
                  <Skeleton active={true} />
                </>
              ) : (
                state
                  ?.filter(searched(search))
                  .map((data, index) => <Card data={data} key={index} />)
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Inbox;
