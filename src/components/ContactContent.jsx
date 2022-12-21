import React from "react";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Image } from "antd";
import imgz from "../assets/ct6.svg";
import img from "../assets/ct.svg";
import { searchFriend } from "../redux/actions/action";
import { toast } from "react-toastify";
const ContactContent = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="container-fluid" style={{ paddingTop: "2rem" }}>
      {loading ? (
        <h4 className="text-danger">Loading...</h4>
      ) : (
        <h4
          className="text-primary"
          style={{
            textShadow: "var(--shadow)",
            fontWeight: "bolder",
            fontSize: "1.3rem",
            marginBottom: "2rem",
          }}
        >
          <SearchOutlined style={{ fontSize: "2rem", paddingRight: "1rem" }} />
          Search Your Contacts around the world
        </h4>
      )}
      <div className="row">
        <div className="col-sm-8">
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
          {state == [] ? (
            <div className="col-sm-12">
              <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col-sm-4">
                  <Image src={state?.image ? img : ""} alt="/" width={200} />
                </div>
                <div className="col-sm-8 set">
                  <h5>
                    Account Address:- <span>{state?.account}</span>
                  </h5>
                  <h5>
                    Name:- <span>{state?.name}</span>
                  </h5>
                  <h5>
                    <h5>
                      City:- <span>{state?.city}</span>
                    </h5>
                    <h5>
                      Country:- <span>{state?.country}</span>
                    </h5>{" "}
                    Bio :- <span>{state?.bio}</span>
                  </h5>
                </div>
              </div>
            </div>
          ) : (
            <center
              style={{ paddingTop: "1.5rem", width: "100%", height: "80%" }}
            >
              <img
                src={imgz}
                alt="img"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
              <p>No Contacts available</p>
            </center>
          )}
        </div>

        <div className="col-sm-4">
          <img
            src={img}
            alt="imgh"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
